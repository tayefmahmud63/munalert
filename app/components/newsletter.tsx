"use client";
import React from "react";

export default function Newsletter() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 bg-[#161819] rounded-xl shadow-lg max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-white mt-12 mb-4" style={{ fontFamily: 'CustomFont, Arial, Helvetica, sans-serif' }}>
        নিউজলেটার সাবক্রাইব করুন
      </h2>
      <p className="text-white mb-6 text-center opacity-80">
        আমাদের সাথে যুক্ত থাকুন নিউজলেটার সাবস্ক্রাইব করে। আমরা নিয়মিত আপডেট গুরুত্বপূর্ণ তথ্য শেয়ার করি যা আপনাকে নিখোঁজ শিশুদের খোঁজে সাহায্য করতে পারে। একসাথে, আমরা একটি বড় প্রভাব ফেলতে পারি।
      </p>
      <form className="w-full flex flex-col gap-4" onSubmit={e => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
        <input
          type="email"
          required
          placeholder="আপনার ইমেইল ঠিকানা"
            className="px-4 py-3 rounded-lg border border-[#E82063] focus:border-[#ea477e] outline-none text-white opacity-30 placeholder-white"
          style={{ '::placeholder': { color: 'white' } }}
        />
        <button
          type="submit"
          className="bg-[#E82063] text-white font-bold py-3 rounded-lg hover:bg-[#ea477e] transition"
        >
          সাবস্ক্রাইব করুন
        </button>
      </form>
    </div>
  );
}