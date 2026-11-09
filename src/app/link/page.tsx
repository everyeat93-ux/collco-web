"use client";

import { useEffect } from "react";

// 목적지 주소 (나중에 도메인을 바꾸거나 특정 이벤트 페이지로 보낼 때 여기만 수정하면 됩니다)
const TARGET_URL = "https://collco-web.onrender.com";

export default function LinkBridgePage() {
  useEffect(() => {
    window.location.replace(TARGET_URL);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[#0B0B0C] font-mono text-xs p-4 text-center">
      <div className="w-8 h-8 rounded-full border-2 border-[#0B0B0C] border-t-transparent animate-spin mb-4" />
      <p className="font-bold tracking-wider">COLLCO STUDIO</p>
      <p className="text-[#737067] mt-1">Connecting to official website...</p>
      <a href={TARGET_URL} className="mt-4 underline text-[11px] text-[#AFA99E]">
        자동으로 이동하지 않으면 여기를 클릭하세요.
      </a>
    </div>
  );
}

