"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  PaperAirplaneIcon,
  TrashIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import chatIcon from "../../public/assets/chatIcon.png";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Icon } from "@iconify/react";
import axios from "axios";
import VapiButton from "./VapiButton";
import { marked } from "marked";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MessageAndCall = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const textareaRef = useRef(null);
  const [message, setMessage] = useState("");
  const [img, setImg] = useState();
  const [preview, setPreview] = useState(null);
  const [imgUrl, setImgUrl] = useState();
  // const [products, setProducts] = useState([]);
  const [chatHistory, setChatHistory] = useState([
    {
      sender: "bot",
      text: "👋 Hi! I’m CongentAI Chatbot. Nice to meet you. How may I help you today?",
      image: "",
      products: [],
      date: "",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [suggestQuestion, setSuggestQuestion] = useState([]);
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    // Trigger the file input click
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(file);
      setPreview(URL.createObjectURL(file));
      // Delay the upload until the state is updated
      uploadImage(file);
    }
  };

  async function uploadImage(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "lt2tb7ci");

    try {
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/dddvfrdb1/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const urlData = await res.json();
      setImgUrl(urlData.secure_url); // Use secure_url for HTTPS
      console.log("Image URL:", urlData.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }

  useEffect(() => {
    const savedChatHistory = localStorage.getItem("chatHistory");
    if (savedChatHistory) {
      setChatHistory(JSON.parse(savedChatHistory));
    }
    // const savedProducts = localStorage.getItem("products");
    // if(savedProducts){
    //   setProducts(JSON.parse(savedProducts));
    // }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
    // localStorage.setItem("products",JSON.stringify(products))
  }, [chatHistory]);

  function formatDate(date) {
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return new Date(date).toLocaleString("en-GB", options);
  }

  const handleSendMessage = (suggest) => {
    if (!message.trim() && !suggest) return;
    const date = new Date();
    const userMessage = {
      sender: "user",
      text: message || suggest,
      image: imgUrl,
      products: [],
      date: date,
    };
    setChatHistory((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    const data = {
      query: message || suggest,
      userId: "unus123",
      domain: "http://localhost:3000/",
      image: img,
    };
    axios
      .post(
        `https://abroad-inquiry-ai-new-api-607757000261.us-central1.run.app/chat`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        const data = {
          user_message: message || suggest,
          ai_response: res?.data?.response,
        };

        axios
          .post(
            `https://suggestion-question-607757000261.us-central1.run.app/generate_questions`,
            data,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            const questionsString = response?.data?.questions;
            const questionsArray = questionsString
              ?.split(", ")
              .map((question) => question.trim());
            setSuggestQuestion(questionsArray);
          })
          .catch((err) => console.log(err));

        const botResponse = {
          sender: "bot",
          text: res.data.response || "Sorry, I didn't understand that.",
          products: res?.data?.products,
          date: date,
        };
        setChatHistory((prev) => [...prev, botResponse]);
        // setProducts((prev) => [...(prev || []), ...(res?.data?.products || [])]);
        setImg("");
        setImgUrl("");
        setPreview("");
        setMessage("");
      })
      .catch((error) => {
        const errorResponse = {
          sender: "bot",
          text: "An error occurred while connecting to the server. Please try again later.",
          products: [],
        };
        setChatHistory((prev) => [...prev, errorResponse]);
        setImg("");
        setImgUrl("");
        setPreview("");
        setMessage("");
        console.error("Error:", error.response?.data || error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleInput = (e) => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    const maxRows = 3;
    const lineHeight = parseInt(
      window.getComputedStyle(textarea).lineHeight,
      10
    );
    const maxHeight = lineHeight * maxRows;

    if (textarea.scrollHeight > maxHeight) {
      textarea.style.height = `${maxHeight}px`;
      textarea.style.overflowY = "scroll";
    } else {
      textarea.style.height = `${textarea.scrollHeight}px`;
      textarea.style.overflowY = "hidden";
    }
  };

  const handleSuggest = (suggest) => {
    setPreview("");
    handleSendMessage(suggest);
  };

  const deleteChatHistory = () => {
    setChatHistory([
      {
        sender: "bot",
        text: "👋 Hi! I’m CongentAI Chatbot. Nice to meet you. How may I help you today?",
        products: [],
      },
    ]);
    localStorage.removeItem("chatHistory");
    setSuggestQuestion([]);
  };

  console.log("chathistory:", chatHistory);

  return (
    <>
      <div>
        <VapiButton />
      </div>

      <div>
        {isPopoverOpen ? null : (
          <div className="fixed bottom-4 right-20 bg-orange-50 text-sm rounded-tl-full rounded-bl-full rounded-br-full p-2 shadow-xl cursor-pointer">
            <p>chat with us </p>
          </div>
        )}
        <div className="fixed bottom-4 right-4 bg-blue-700 rounded-full p-3 shadow-lg cursor-pointer hover:bg-blue-600 overflow-hidden">
          <Popover onOpenChange={(open) => setIsPopoverOpen(open)}>
            <PopoverTrigger asChild>
              {isPopoverOpen ? (
                <ChevronDownIcon className="h-7 w-7 text-white" />
              ) : (
                <ChatBubbleOvalLeftEllipsisIcon className="h-7 w-7 text-white" />
              )}
            </PopoverTrigger>

            <PopoverContent className="w-96 p-0 bg-transparent shadow-none border-none mr-4 mt-2 overflow-hidden">
              <div className="w-full">
                <div className="w-96 mx-auto border rounded-lg shadow-lg">
                  <div
                    className="p-4 rounded-t-lg flex items-center justify-between"
                    style={{
                      background:
                        "linear-gradient(90deg, #3543b0 0%, #8066a7 100%)",
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <Image
                          src={chatIcon}
                          alt="Chatbot Logo"
                          className="w-8 h-8 rounded-full"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <h4 className="text-white text-lg font-semibold">
                          CongentAI Chatbot
                        </h4>
                        <p className="text-sm text-gray-200 font-semibold">
                          Intelligent Guide
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <TrashIcon
                        className="h-6 w-6 text-white mr-3 cursor-pointer"
                        onClick={deleteChatHistory}
                      />
                      <button className="text-white text-xl focus:outline-none">
                        &#x2022;&#x2022;&#x2022;
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-100 space-y-4  max-h-96 overflow-y-auto">
                    {chatHistory.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          msg.sender === "bot" ? "flex-row" : "flex-row-reverse"
                        } items-start space-x-3`}
                      >
                        <div
                          className={`${
                            msg.sender === "bot"
                              ? "bg-white"
                              : "bg-[#03D9FF] text-black"
                          } p-3 rounded-lg shadow text-sm`}
                        >
                          {/* Render Image if Present */}
                          {msg.image && (
                            <div>
                              <img
                                src={msg.image}
                                alt="Preview"
                                style={{
                                  width: "100%",
                                  height: "180px",
                                  objectFit: "cover",
                                  borderRadius: "10px",
                                }}
                              />
                            </div>
                          )}

                          <div
                            dangerouslySetInnerHTML={{
                              __html: marked(msg.text),
                            }}
                          />
                          {msg?.date && (
                            <p className="mt-4 text-[12px] text-bold text-blue-600">
                              {formatDate(msg?.date)}
                            </p>
                          )}

                          {msg.products && msg.products.length > 0 && (
                            <div className="flex flex-col items-center mt-4">
                              <Carousel className="w-44 max-w-48">
                                <CarouselContent>
                                  {msg.products.map((item) => (
                                    <CarouselItem key={item.id}>
                                      <div className="">
                                        <Card>
                                          <CardContent className="flex flex-col items-center justify-center p-6">
                                            <img
                                              src={item.image_url}
                                              alt={item.name}
                                              className="h-14 w-14 object-cover mb-4"
                                            />
                                            <p className="text-[12px] font-bold text-gray-800 text-center">
                                              {item.name}
                                            </p>
                                            {/* <p className="text-sm text-gray-600 text-center mb-2">
                          {item.highlights}
                        </p> */}
                                            <span className="text-sm font-medium text-gray-700 mb-4 mt-2">
                                              Price: {item.price}
                                            </span>
                                            <button
                                              onClick={() =>
                                                window.open(
                                                  item.buy_link,
                                                  "_blank"
                                                )
                                              }
                                              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                                            >
                                              Buy Now
                                            </button>
                                          </CardContent>
                                        </Card>
                                      </div>
                                    </CarouselItem>
                                  ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                              </Carousel>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    {loading && (
                      <div className="flex flex-row items-start space-x-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <Image
                            src={chatIcon}
                            alt="Chatbot Logo"
                            className="w-8 h-8 rounded-full"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="text-sm flex items-center">
                          <span className="ml-2">
                            <svg
                              width="40"
                              height="40"
                              viewBox="0 0 120 30"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#000"
                            >
                              <circle cx="15" cy="15" r="15">
                                <animate
                                  attributeName="r"
                                  from="15"
                                  to="15"
                                  begin="0s"
                                  dur="0.8s"
                                  values="15;9;15"
                                  calcMode="linear"
                                  repeatCount="indefinite"
                                />
                                <animate
                                  attributeName="fillOpacity"
                                  from="1"
                                  to="1"
                                  begin="0s"
                                  dur="0.8s"
                                  values="1;.5;1"
                                  calcMode="linear"
                                  repeatCount="indefinite"
                                />
                              </circle>
                              <circle cx="60" cy="15" r="9" fillOpacity="0.3">
                                <animate
                                  attributeName="r"
                                  from="9"
                                  to="9"
                                  begin="0s"
                                  dur="0.8s"
                                  values="9;15;9"
                                  calcMode="linear"
                                  repeatCount="indefinite"
                                />
                                <animate
                                  attributeName="fillOpacity"
                                  from="0.5"
                                  to="0.5"
                                  begin="0s"
                                  dur="0.8s"
                                  values=".5;1;.5"
                                  calcMode="linear"
                                  repeatCount="indefinite"
                                />
                              </circle>
                              <circle cx="105" cy="15" r="15">
                                <animate
                                  attributeName="r"
                                  from="15"
                                  to="15"
                                  begin="0s"
                                  dur="0.8s"
                                  values="15;9;15"
                                  calcMode="linear"
                                  repeatCount="indefinite"
                                />
                                <animate
                                  attributeName="fillOpacity"
                                  from="1"
                                  to="1"
                                  begin="0s"
                                  dur="0.8s"
                                  values="1;.5;1"
                                  calcMode="linear"
                                  repeatCount="indefinite"
                                />
                              </circle>
                            </svg>
                          </span>
                        </div>
                      </div>
                    )}

                    {!loading && (
                      <div className="flex flex-wrap gap-2">
                        {suggestQuestion?.length > 0 ? (
                          <>
                            {suggestQuestion?.map((buttonText) => (
                              <button
                                key={buttonText}
                                onClick={() => handleSuggest(buttonText)}
                                className="border border-blue-500 text-blue-500 px-3 py-1.5 rounded-full hover:bg-blue-500 hover:text-white transition"
                              >
                                {buttonText}
                              </button>
                            ))}
                          </>
                        ) : (
                          <>
                            {[
                              "Start 14-Day Free Trial",
                              "Book a Free Demo",
                              "I have a Question",
                              "Chat with a Live Agent",
                            ].map((buttonText) => (
                              <button
                                key={buttonText}
                                onClick={() => handleSuggest(buttonText)}
                                className="border border-blue-500 text-blue-500 px-3 py-1.5 rounded-full hover:bg-blue-500 hover:text-white transition"
                              >
                                {buttonText}
                              </button>
                            ))}
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 border-t">
                    <textarea
                      ref={textareaRef}
                      rows={1}
                      placeholder="Write your message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onInput={handleInput}
                      onKeyDown={handleKeyDown}
                      disabled={loading}
                      className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 resize-none"
                      style={{ lineHeight: "1.5em" }}
                    />
                    {preview ? (
                      <div>
                        <img
                          src={preview}
                          alt="Preview"
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                        />
                      </div>
                    ) : (
                      <div className="relative">
                        <input
                          type="file"
                          ref={fileInputRef}
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                        />
                        <div
                          onClick={handleIconClick}
                          className="cursor-pointer text-blue-500 hover:text-blue-700 transition"
                        >
                          <Icon icon="proicons:photo" width={25} height={25} />
                        </div>
                      </div>
                    )}

                    <button
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                      className={`p-2 rounded-full text-white ${
                        message.trim()
                          ? "bg-blue-500 hover:bg-blue-600"
                          : "bg-gray-300 cursor-not-allowed"
                      }`}
                    >
                      <PaperAirplaneIcon className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Footer Branding */}
                  <div className="bg-white flex items-center justify-center py-4 px-6 space-x-4 border-t border-gray-200">
                    <div className="flex items-center space-x-3">
                      <Icon
                        icon="ri:facebook-fill"
                        width={12}
                        height={12}
                        className="text-blue-600 hover:text-blue-800 transition"
                      />
                      <Separator
                        orientation="vertical"
                        className="h-5 border-l border-gray-300"
                      />
                      <Icon
                        icon="basil:linkedin-solid"
                        width={15}
                        height={15}
                        className="text-blue-500 hover:text-blue-700 transition"
                      />
                      <Separator
                        orientation="vertical"
                        className="h-5 border-l border-gray-300"
                      />
                    </div>
                    <p className="text-[12px] text-gray-600">
                      Powered by{" "}
                      <span className="font-semibold text-gray-800">
                        NeuroBrain
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  );
};

export default MessageAndCall;
