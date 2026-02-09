module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/components/PostersRow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostersRow",
    ()=>PostersRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const posterImages = [
    "/poster_images/poster1.webp",
    "/poster_images/poster2.webp",
    "/poster_images/poster3.webp",
    "/poster_images/poster4.webp",
    "/poster_images/poster5.webp"
];
function PostersRow() {
    // For mobile slider
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(()=>{
            setCurrent((prev)=>(prev + 1) % posterImages.length);
        }, 2000);
        return ()=>{
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [
        current
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "block sm:hidden w-full flex justify-center items-center py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl shadow-md overflow-hidden bg-white",
                    style: {
                        width: 220,
                        height: 295
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: posterImages[current],
                        alt: `Poster ${current + 1}`,
                        width: 220,
                        height: 295,
                        className: "object-cover w-full h-full",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/app/components/PostersRow.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/PostersRow.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/PostersRow.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden sm:flex flex-row flex-wrap justify-center gap-4 py-6 w-full",
                children: posterImages.map((src, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl shadow-md overflow-hidden bg-white",
                        style: {
                            width: 220,
                            height: 295
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: src,
                            alt: `Poster ${idx + 1}`,
                            width: 220,
                            height: 295,
                            className: "object-cover w-full h-full",
                            priority: idx === 0
                        }, void 0, false, {
                            fileName: "[project]/app/components/PostersRow.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this)
                    }, src, false, {
                        fileName: "[project]/app/components/PostersRow.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/PostersRow.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/PostersRow.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/HeroSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function HeroSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-[80vh] w-full flex items-center justify-center mb-22 overflow-hidden ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 w-full h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                    className: "absolute top-1/2 left-1/2 w-[100vw] h-[80vh] min-w-[142.216vh] min-h-[45vw] -translate-x-1/2 -translate-y-1/2",
                    src: "https://www.youtube.com/embed/gzv9MHkhcVw?autoplay=1&mute=1&loop=1&playlist=gzv9MHkhcVw&controls=0&showinfo=0&rel=0&modestbranding=1",
                    title: "Background video",
                    allow: "autoplay; encrypted-media",
                    allowFullScreen: true
                }, void 0, false, {
                    fileName: "[project]/app/components/HeroSection.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/HeroSection.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/75 z-10 h-full"
            }, void 0, false, {
                fileName: "[project]/app/components/HeroSection.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#161819] to-transparent z-20"
            }, void 0, false, {
                fileName: "[project]/app/components/HeroSection.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 h-full w-3/4 bg-gradient-to-r from-[#161819] to-transparent z-20 pointer-events-none opacity-40"
            }, void 0, false, {
                fileName: "[project]/app/components/HeroSection.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 h-full w-3/4 bg-gradient-to-l from-[#161819] to-transparent z-20 pointer-events-none opacity-0"
            }, void 0, false, {
                fileName: "[project]/app/components/HeroSection.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-30 text-center text-white flex flex-col items-center px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row items-center justify-center gap-8 mb-2 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/Nikhoj.svg",
                                alt: "Logo 1",
                                className: "h-38 w-auto"
                            }, void 0, false, {
                                fileName: "[project]/app/components/HeroSection.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.munalert.org",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/Munalert.svg",
                                    alt: "Logo 2",
                                    className: "h-16 w-auto"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/HeroSection.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/HeroSection.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HeroSection.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-6xl font-bold mb-4  md:px-4 leading-relaxed",
                        style: {
                            fontFamily: 'CustomFont, Arial, Helvetica, sans-serif'
                        },
                        children: "প্রত্যেক নিখোঁজের জন্য"
                    }, void 0, false, {
                        fileName: "[project]/app/components/HeroSection.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-6xl font-bold mb-4 md:px-4 ",
                        style: {
                            fontFamily: 'CustomFont, Arial, Helvetica, sans-serif',
                            color: '#E82063'
                        },
                        children: "একত্রিত হই"
                    }, void 0, false, {
                        fileName: "[project]/app/components/HeroSection.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg mb-2",
                        style: {
                            fontFamily: 'CustomFont2, Arial, Helvetica, sans-serif'
                        },
                        children: "Every Child Matters"
                    }, void 0, false, {
                        fileName: "[project]/app/components/HeroSection.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://munalert.org/report-missing",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "mt-6 inline-block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: {
                                border: '2px solid #E82063',
                                background: 'transparent',
                                color: '#E82063',
                                padding: '0.75rem 2rem',
                                borderRadius: '0.5rem',
                                marginBottom: '4rem',
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                fontFamily: 'CustomFont, Arial, Helvetica, sans-serif',
                                transition: 'background 0.2s, color 0.2s'
                            },
                            onMouseOver: (e)=>{
                                e.currentTarget.style.background = '#E82063';
                                e.currentTarget.style.color = '#fff';
                            },
                            onMouseOut: (e)=>{
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = '#E82063';
                            },
                            children: "নিখোঁজ রিপোর্ট করুন"
                        }, void 0, false, {
                            fileName: "[project]/app/components/HeroSection.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/HeroSection.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HeroSection.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/HeroSection.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/MemoriesModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MemoriesModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
function MemoriesModal({ isVisible, selected, handleClose, hidePosterDownload = false }) {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const firstName = selected?.name.split(" ").at(0);
    const story = selected?.story;
    const match = story?.match(/\n\n\*(–.*?)\*$/);
    let mainText = story;
    let authorText = null;
    if (match) {
        authorText = match[1];
        mainText = story?.replace(/\n\n\*(–.*?)\*$/, "");
    }
    const handleShare = async ()=>{
        if (!selected?.name) return;
        const shareLink = `${window.location.origin}/#${selected.name.replace(/\s+/g, "-")}`;
        if (navigator.share) {
            try {
                await navigator.share({
                    title: selected.name,
                    text: selected.story,
                    url: shareLink
                });
            } catch (err) {
            // User cancelled or error
            }
        } else {
            await navigator.clipboard.writeText(shareLink);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2500);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isVisible && selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 bg-[#212121] overflow-y-auto z-[100]",
            initial: {
                y: "100%",
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1
            },
            exit: {
                y: "100%",
                opacity: 0
            },
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            },
            onClick: handleClose,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleClose,
                    className: "fixed top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 z-[110] bg-white hover:bg-[#C8E4C2] active:bg-[#C8E4C2] rounded-full text-black cursor-pointer p-2 sm:p-3 shadow-lg transition-all",
                    "aria-label": "Close modal",
                    style: {
                        boxShadow: '0 2px 12px rgba(0,0,0,0.15)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M15 5L5 15M5 5l10 10",
                            stroke: "black",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MemoriesModal.tsx",
                            lineNumber: 75,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MemoriesModal.tsx",
                        lineNumber: 74,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MemoriesModal.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full px-1 xs:px-2 sm:px-4 md:px-6 max-w-full lg:container mx-auto",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bethany mb-1 text-white",
                                    children: selected.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MemoriesModal.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-2 text-white text-sm",
                                    children: selected.dates
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MemoriesModal.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MemoriesModal.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row items-center px-0 md:px-6 lg:px-24 py-4 md:py-16 justify-center gap-4 md:gap-6 text-center w-full",
                            children: [
                                selected.image_src?.large && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0 w-full max-w-[320px] sm:max-w-[400px] md:w-64 lg:w-72 sticky md:relative flex justify-center mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative overflow-hidden -translate-y-2 md:-translate-y-0 flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            alt: selected.name,
                                            src: selected.image_src.large,
                                            loading: "eager",
                                            className: "w-full h-40 xs:h-48 sm:h-60 md:h-[320px] lg:h-[360px] object-cover rounded-xl shadow-lg mx-auto"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MemoriesModal.tsx",
                                            lineNumber: 98,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MemoriesModal.tsx",
                                        lineNumber: 97,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MemoriesModal.tsx",
                                    lineNumber: 96,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 pt-4 md:pt-0 xl:ml-8 flex flex-col items-start justify-start text-left w-full max-w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-5xl font-bethany mb-4 text-white hidden md:block",
                                            children: selected.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MemoriesModal.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                            whileHover: {
                                                scale: 1.05
                                            },
                                            transition: {
                                                type: "spring",
                                                stiffness: 300
                                            },
                                            style: {
                                                color: "#E01075"
                                            },
                                            className: "font-bold text-xl mb-4 cursor-pointer hidden md:block",
                                            children: selected.seat
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MemoriesModal.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-6 text-white text-lg hidden md:block",
                                            children: selected.dates
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MemoriesModal.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "whitespace-pre-line text-white ",
                                            style: {
                                                fontFamily: 'CustomFont2, Arial, Helvetica, sans-serif'
                                            },
                                            children: mainText
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MemoriesModal.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this),
                                        authorText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "italic text-sm opacity-70 mt-4 text-white",
                                            children: authorText
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MemoriesModal.tsx",
                                            lineNumber: 123,
                                            columnNumber: 32
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row gap-4 mt-6 items-start justify-start",
                                            children: [
                                                !hidePosterDownload && (selected.posterLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: selected.posterLink,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "bg-white rounded-full cursor-pointer px-6 py-3 h-12 text-xs text-[#E01075] font-medium flex items-center gap-2 hover:bg-gray-100 transition min-w-[160px] justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "-mb-1",
                                                        children: "পোস্টের ডাউনলোড করুন "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MemoriesModal.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MemoriesModal.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    disabled: true,
                                                    className: "bg-white rounded-full cursor-not-allowed px-6 py-3 h-12 text-xs text-[#E01075] font-medium flex items-center gap-2 opacity-50 min-w-[160px] justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "-mb-1",
                                                        children: "পোস্টের ডাউনলোড করুন "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MemoriesModal.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MemoriesModal.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 21
                                                }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleShare,
                                                    className: "bg-[#E01075] rounded-full cursor-pointer px-6 py-3 h-12 transition-all uppercase text-xs text-white font-medium flex items-center gap-2 min-w-[160px] justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "-mb-1",
                                                        children: "শেয়ার করুন"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MemoriesModal.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MemoriesModal.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, this),
                                                selected.videoLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: selected.videoLink,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "bg-[#FF0000] rounded-full cursor-pointer px-6 py-3 h-12 text-xs text-white font-medium flex items-center gap-2 hover:bg-[#cc0000] transition min-w-[160px] justify-center",
                                                    style: {
                                                        textTransform: 'uppercase'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "20",
                                                            height: "20",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M23.498 6.186a2.994 2.994 0 0 0-2.112-2.116C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.57A2.994 2.994 0 0 0 .502 6.186C0 8.344 0 12 0 12s0 3.656.502 5.814a2.994 2.994 0 0 0 2.112 2.116C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.57a2.994 2.994 0 0 0 2.112-2.116C24 15.656 24 12 24 12s0-3.656-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/MemoriesModal.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 126
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MemoriesModal.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "ইউটিউব ভিডিও"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/MemoriesModal.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/MemoriesModal.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MemoriesModal.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MemoriesModal.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MemoriesModal.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this),
                        (selected.image1 || selected.image2 || selected.image3 || selected.image4) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex justify-center items-center py-4 md:py-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3 md:gap-6 w-full max-w-[320px] sm:max-w-[400px] md:w-[700px] md:max-w-3xl lg:w-[900px]",
                                children: [
                                    selected.image1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: selected.image1,
                                        alt: "image1",
                                        className: "w-full h-24 xs:h-32 sm:h-44 md:h-80 object-cover rounded-xl shadow-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MemoriesModal.tsx",
                                        lineNumber: 170,
                                        columnNumber: 39
                                    }, this),
                                    selected.image2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: selected.image2,
                                        alt: "image2",
                                        className: "w-full h-24 xs:h-32 sm:h-44 md:h-80 object-cover rounded-xl shadow-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MemoriesModal.tsx",
                                        lineNumber: 171,
                                        columnNumber: 39
                                    }, this),
                                    selected.image3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: selected.image3,
                                        alt: "image3",
                                        className: "w-full h-24 xs:h-32 sm:h-44 md:h-80 object-cover rounded-xl shadow-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MemoriesModal.tsx",
                                        lineNumber: 172,
                                        columnNumber: 39
                                    }, this),
                                    selected.image4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: selected.image4,
                                        alt: "image4",
                                        className: "w-full h-24 xs:h-32 sm:h-44 md:h-80 object-cover rounded-xl shadow-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MemoriesModal.tsx",
                                        lineNumber: 173,
                                        columnNumber: 39
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MemoriesModal.tsx",
                                lineNumber: 169,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MemoriesModal.tsx",
                            lineNumber: 168,
                            columnNumber: 15
                        }, this),
                        selected.videoLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center items-center w-full py-4 md:py-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-[320px] sm:max-w-[400px] md:max-w-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        src: selected.videoLink,
                                        title: "",
                                        frameBorder: "0",
                                        allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                        referrerPolicy: "strict-origin-when-cross-origin",
                                        allowFullScreen: true,
                                        className: "absolute top-0 left-0 w-full h-full rounded-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MemoriesModal.tsx",
                                        lineNumber: 182,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MemoriesModal.tsx",
                                    lineNumber: 181,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MemoriesModal.tsx",
                                lineNumber: 180,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MemoriesModal.tsx",
                            lineNumber: 179,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MemoriesModal.tsx",
                    lineNumber: 81,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MemoriesModal.tsx",
            lineNumber: 59,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MemoriesModal.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Memory.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Memory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Memory({ handleOpen, memory }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleOpen,
        className: "cursor-pointer group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-gray-700",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-32  md:w-48",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    alt: memory.name,
                                    loading: "lazy",
                                    className: "rounded-xl w-auto h-48 object-cover",
                                    src: memory.image_src.small
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Memory.tsx",
                                    lineNumber: 18,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-xl w-36 h-48 bg-[#E82063] bg-opacity-0 group-hover:bg-opacity-90 flex items-center justify-center transition-all duration-500 z-30 opacity-0 group-hover:opacity-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-bold text-sm",
                                        children: memory.seat
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Memory.tsx",
                                        lineNumber: 25,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Memory.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Memory.tsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Memory.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-bethany text-white text-xl mb-1 ",
                                        children: memory.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Memory.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg uppercase text-[#a7a7a7]",
                                        children: memory.seat
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Memory.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase pt-2 text-[#a7a7a7]",
                                        children: memory.dates
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Memory.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Memory.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M9 6L15 12L9 18",
                                        stroke: "#E82063",
                                        strokeWidth: "4",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Memory.tsx",
                                        lineNumber: 48,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Memory.tsx",
                                    lineNumber: 41,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Memory.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Memory.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Memory.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Memory.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Memory.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/utils/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "memories",
    ()=>memories
]);
const zunayedHasanSokal = "/slider_images/8.webp";
const abdulMazidImg = "/slider_images/18.webp";
const abdullahTamim = "/slider_images/16.webp";
const fahimMiya = "/slider_images/13.webp";
const hasanImg = "/slider_images/19.webp";
const ikraIslam = "/slider_images/23.webp";
const khadizaMaya = "/slider_images/15.webp";
const mdIbrahim = "/slider_images/22.webp";
const siyamAli = "/slider_images/24.webp";
const tasimImg = "/slider_images/17.webp";
const mdAymanImg = "/slider_images/10.webp";
const mdHossain = "/slider_images/14.webp";
const mustafizImg = "/slider_images/20.webp";
const rengnayaMurung = "/slider_images/21.webp";
const rihanHossain = "/slider_images/12.webp";
const robiulImg = "/slider_images/7.webp";
const samiraImg = "/slider_images/9.webp";
const zubayerHossain = "/slider_images/11.webp";
const mdTamim = "/slider_images/6.webp";
const memories = [
    {
        name: "জুনায়েদ হোসেন সকাল",
        seat: "ঢাকা ৭ আসন",
        dates: "২১ জানুয়ারী, ২০১৮",
        image_src: {
            small: zunayedHasanSokal,
            large: zunayedHasanSokal
        },
        story: `ঢাকার লালবাগ থেকে সকাল নামের একটি শিশু ২১ জানুয়ারি ২০১৮ থেকে নিখোঁজ।
আজ পেরিয়েছে ৮ বছর, তবুও তাকে উদ্ধার করা যায়নি।
শিশুটি তখন ভিডিও গেম খেলছিল, আর তার ছোট্ট জীবন এক মুহূর্তে হারিয়ে গেল।
পরিবারের প্রতিটি দিন কেটে যাচ্ছে অনিশ্চয়তা, হতাশা এবং ব্যথার সঙ্গে।
কর্তৃপক্ষের সাহায্য প্রার্থনা করে পরিবার বারবার বলছে—আমাদের শিশুটি কোথায়?
এই ৮ বছরের অপেক্ষা, এক পরিবারকে ভেঙে দিয়েছে, কিন্তু আমরা হার মানি না।
আপনি যদি সকালকে দেখে থাকেন বা কোনো তথ্য জানেন, দয়া করে যোগাযোগ করুন এবং সাহায্য করুন।
একটি ছোট্ট সহানুভূতি, একটি শেয়ার, হয়তো তাদের হারানো সন্তানকে ফিরিয়ে আনতে পারে।`,
        posterLink: "https://drive.google.com/file/d/1bVCETzKEBvhr5vztXWGspak9r8Jsnq6h/view?usp=sharing",
        videoLink: "https://www.youtube.com/embed/AKbWPDvgPVo?si=PD1rKxjc6TftYSBK",
        image1: "/sokal_images/sokal2.webp",
        image2: "/sokal_images/sokal3.webp",
        image3: "/sokal_images/sokal4.webp",
        image4: "/sokal_images/sokal5.webp"
    },
    {
        name: "আবদুল্লাহ তামিম",
        seat: "ঢাকা-১৮ আসন ",
        dates: "২০ মে, ২০২৫",
        image_src: {
            small: abdullahTamim,
            large: abdullahTamim
        },
        story: `২০ মে ২০২৫। সকাল প্রায় ৯টা। প্রতিদিনের মতো স্কুলে যাওয়ার উদ্দেশ্যে বাড়ি থেকে বেরিয়েছিল তামিম। সরিষা-প্রেমটিয়া মাধ্যমিক বিদ্যালয়ের সপ্তম শ্রেণির এই ছাত্রটি—মো. নজরুল ইসলামের একমাত্র ছেলে—সেদিন আর ফিরে আসেনি। পাংশা উপজেলার কলিমহর ইউনিয়নের সাঁজুরিয়া গ্রামে সেই সকালটাই ছিল শেষ স্বাভাবিক সকাল।
দিন গড়িয়েছে, মাস পেরিয়েছে। তামিম নিখোঁজ হওয়ার প্রায় আট মাস কেটে গেছে। সন্তানের খোঁজে তার পরিবার একা থাকেনি। চ্যানেল ২৪–এর প্রতিবেদন অনুযায়ী, ৩ জুন ২০২৫ তারিখে পাংশা পৌর শহরে পরিবার ও এলাকাবাসী মানববন্ধন কর্মসূচি পালন করেছে। সেই মানববন্ধন ছিল নীরব প্রতিবাদ আর অসহায় আকুতির প্রতিচ্ছবি।
এরপরও থেমে থাকেনি চেষ্টা। ফুটবল ম্যাচে প্ল্যাকার্ড প্রদর্শনের মাধ্যমে, সামাজিক যোগাযোগমাধ্যমে ছবি ও বার্তা ছড়িয়ে দিয়ে তামিমের সন্ধানের আহ্বান জানানো হয়েছে। তবুও জুন ২০২৫–এর পর তার অবস্থান সম্পর্কে কোনো নিশ্চিত সরকারি বা সংবাদমাধ্যমের তথ্য সামনে আসেনি।
তামিম আজও নিখোঁজ। আর তার পরিবার আজও অপেক্ষায়—একটি সকাল, একটি দরজা খোলার শব্দ, কিংবা শুধু একটি খবরের আশায়। যতদিন সে ফিরে না আসে, এই অপেক্ষা শেষ হবে না।?`,
        posterLink: "https://drive.google.com/file/d/1WE8tcAwQot1wqgNTgOXzFc2TGZqX73SQ/view?usp=sharing",
        videoLink: ""
    },
    {
        name: "খাদিজা মায়া",
        seat: "ঢাকা-১৮ আসন",
        dates: "১১ এপ্রিল, ২০২১",
        image_src: {
            small: khadizaMaya,
            large: khadizaMaya
        },
        story: `চাঁদপুরের শাহরাস্তি থানার ছোটতুলা গ্রামে থাকত পাঁচ বছরের ছোট্ট মেয়েটি খাদিজা আক্তার। বাবার নাম সাব্বির হোসেন (আব্দুল্লাহ), মায়ের নাম ফাতেমা আক্তার।
১১ এপ্রিল ২০২১, সকাল প্রায় ১১টা ৩০ মিনিটে, সে প্রতিদিনের মতো বাড়ির পাশের বাড়িতে খেলতে যায়। কিন্তু সেদিন আর ফিরে আসেনি।
খোঁজ করা হয় চারপাশে, গ্রামের অলিগলিতে, পুকুরপাড়ে—কিন্তু কোথাও পাওয়া যায়নি তাকে। মুহূর্তেই আনন্দের বাড়ি নেমে আসে গভীর শূন্যতায়।
আজও সেই বাড়িতে অপেক্ষা থেমে নেই।
মায়ের চোখে জল, বাবার বুকে একটাই আশা—
কোনো একদিন খাদিজা ফিরে আসবে।
এটি কোনো গল্প নয়, এটি একটি নিখোঁজ শিশুর বাস্তব কাহিনি।
একটু সহানুভূতি, একটু সাহায্য—হয়তো একটি শিশুকে ঘরে ফিরিয়ে দিতে পারে।`,
        posterLink: "https://drive.google.com/file/d/1P-5wN7s77smyspjEg3QjpXCpPIesrxB9/view?usp=sharing",
        videoLink: ""
    },
    {
        name: "ফাহিম মিয়া",
        seat: "ঢাকা-১৮ আসন",
        dates: "২৫ জানুয়ারী, ২০২৬ ",
        image_src: {
            small: fahimMiya,
            large: fahimMiya
        },
        story: `নিখোঁজের তারিখ: ২৫ জানুয়ারি ২০২৬ থেকে
ফাহিম পড়াশোনার কথা বলে বাড়ি থেকে বের হয়েছিল।
এর আগেও কয়েকবার এভাবে বের হয়ে গিয়েছিল, তখন তাকে স্টেশন এলাকা থেকে পাওয়া যায়।
কিন্তু এবার অনেক খোঁজাখুঁজি করেও এখনো তার কোনো সন্ধান মেলেনি।
প্রতিটি দিন পরিবারের জন্য কাটছে ভয় আর অনিশ্চয়তার মধ্যে।
একটি পরিবার আজ তার প্রিয় মানুষটির অপেক্ষায় পথ চেয়ে আছে।
আপনি যদি কোথাও ফাহিমকে দেখে থাকেন বা কোনো তথ্য জানেন, দয়া করে যোগাযোগ করুন।
একটি শেয়ারই হয়তো তাকে আবার পরিবারের কাছে ফিরিয়ে দিতে পারে।`,
        posterLink: "https://drive.google.com/file/d/1qUSch-uhfXHEGuZiOOF_r_Xg_YgbDdze/view?usp=sharing",
        videoLink: ""
    },
    {
        name: "হাসান",
        seat: "ঢাকা-১৮ আসন ",
        dates: "১০ ডিসেম্বর, ২০২৫",
        image_src: {
            small: hasanImg,
            large: hasanImg
        },
        story: `ছোট হাসান, মা’র হাত ধরে হাঁটছিল রোজকার মতো।
মা হোস্টেলে কাজ করে, সকাল-সন্ধ্যা ছেলেকে নিয়ে যাওয়া-আসা—আজও ২ নং গেটের কাছে এসে পৌঁছেছে।
হঠাৎ মা’র হাত ছুটে গেল, আর তখনই চোখের পলকে হারিয়ে গেল হাসান |
মা চিৎকার করে ডাকছে, “হাসান! হাসান!” কিন্তু চারপাশে শুধু অচেনা মুখ আর গাড়ির হর্ন।
২ নং গেটের সেই জায়গাটা যেন গিলে খেয়ে ফেলেছে ছোট্ট হাসানকে ।
এখন মা বসে আছে রাস্তার ধারে, হাতে হাসানের ছবিটা চেপে ধরে, চোখে জল আর বুকে একটা ফাঁকা গর্ত—কবে ফিরবে রে আমার হাসান?`,
        posterLink: "https://drive.google.com/file/d/1scymIW_3ev5elHZ5l58H5f76nh22RC4t/view?usp=sharing",
        videoLink: ""
    },
    {
        name: "ইকরা ইসলাম",
        seat: "ঢাকা-১৮ আসন",
        dates: "১ নভেম্বর, ২০২৪ ",
        image_src: {
            small: ikraIslam,
            large: ikraIslam
        },
        story: `২০২৪ সালের ১ নভেম্বর, শুক্রবার বিকেল ৫টার সেই অভিশপ্ত মুহূর্তটি পুরো পরিবারের আকাশ থেকে সবটুকু আলো কেড়ে নিয়েছে। গাজীপুরের সালনা বন বিভাগের সরকারি কোয়ার্টারের যে আঙিনায় একটু আগেও ৫ বছরের ছোট্ট ইকরা ইসলাম হেসে-খেলে বেড়াচ্ছিল, মুহূর্তের ব্যবধানে সেই আঙিনা আজ এক নিস্তব্ধ হাহাকারে পরিণত হয়েছে। ইকরা শুধু আমাদের একটি সন্তান নয়, সে আমাদের পরিবারের প্রাণ।
  তার সেই চঞ্চলতা, ফর্সা গায়ের রঙের মায়াবী চেহারা আর আধো-আধো বুলি ছাড়া আমাদের প্রতিটি সেকেন্ড কাটছে অসহ্য যন্ত্রণায়। মাত্র ৩ ফুট উচ্চতার এই ছোট্ট মানুষটি ছাড়া আমাদের ঘর আজ মরুভূমির মতো খাঁ খাঁ করছে। ওর মা-বাবার চোখের জল আর থামছে না, প্রতিটি পায়ের শব্দে তারা ভাবছেন—এই বুঝি ইকরা ফিরে এলো!`,
        posterLink: "https://drive.google.com/file/d/1NVvB3HBFGz-BYt4NQDz2mnj_OcweTK_s/view?usp=sharing",
        videoLink: ""
    },
    {
        name: "সিয়াম আলী",
        seat: "ঢাকা-১৮ আসন ",
        dates: "১৫ নভেম্বর, ২০২৫",
        image_src: {
            small: siyamAli,
            large: siyamAli
        },
        story: `কোথায় তুমি সিয়াম?
এই সেই সিয়াম, যাকে খুঁজে বেড়াচ্ছে তার অসহায় বাবা মা| মা আজো রোজ গরম ভাত থালায় বেড়ে অপেক্ষা করেন এই খোকা এলো বলে|
বাবা আজো মুঠোফোন হাতে নিয়ে অপেক্ষা করেন, সিয়ামের খোঁজ পাওয়ার সংবাদ এলো বলে| কেউ কেউ বলে সর্বশেষ তাকে রংপুরে দেখা গিয়েছে|
আপনি কি তাকে দেখেছেন?`,
        posterLink: "https://drive.google.com/file/d/1I3JW4X9HY8I7VA8aWuIxzk8NhA4s3Ger/view?usp=sharing",
        videoLink: ""
    },
    {
        name: "মোঃ হোসেন",
        seat: "ঢাকা-১৮ আসন ",
        dates: "৬ ফেব্রুয়ারী, ২০২৬",
        image_src: {
            small: mdHossain,
            large: mdHossain
        },
        story: `একটি পরিবার তাদের ছোট্ট সন্তান হোসাইন (বয়স ৯ বছর) এর খোঁজে এখনো উদ্বিগ্ন।
পিতা কামরুল, বাড়ি চক পাড়া। অনেক খোঁজাখুঁজির পরও শিশুটির কোনো সন্ধান পাওয়া যায়নি।
একটি শিশু কোথায় আছে, কেমন আছে—এই অনিশ্চয়তাই পরিবারটিকে ভেঙে দিচ্ছে।
আপনার আশেপাশে, রাস্তায়, বাজারে, বাসস্ট্যান্ড বা কোনো স্থানে যদি শিশুটিকে দেখে থাকেন, দয়া করে বিষয়টি অবহেলা করবেন না।
একটু সহযোগিতাই পারে একটি পরিবারকে তাদের হারানো সন্তানকে ফিরিয়ে দিতে।`,
        posterLink: "https://drive.google.com/file/d/1tRLzyoDbkfr_NR3XAVcvxNG9DojTvNLS/view?usp=sharing",
        videoLink: ""
    },
    {
        name: "মোঃ তামিম",
        seat: "ঢাকা-১৮ আসন ",
        dates: "২৪ জানুয়ারী, ২০২৬",
        image_src: {
            small: mdTamim,
            large: mdTamim
        },
        story: `তামিম ছিল খুব সাধারণ একটি ছেলে, পরিবারের সকলের চোখের মণি। তার হাসিতে ভরে থাকত বাড়ি। কিন্তু হঠাৎ করেই সব কিছু বদলে গেল। গত ২৪-০১-২০২৬ তারিখে রাত ৯টার দিকে সে বাসা থেকে নতুন বাজার আসার পথে হঠাৎ নিখোঁজ হয়ে যায়। অনেক খোঁজাখুঁজি করেও তার কোনো সন্ধান মেলেনি।
নিখোঁজ শিশুটির মাথায় একটি কাটার দাগ রয়েছে। পরনে ছিল প্যান্ট, শার্ট এবং একটি কালো সুয়েটার।
যদি কোনো হৃদয়বান ব্যক্তি এই শিশুটির খোঁজ জানেন, দয়া করে জানাবেন। একটি অসহায় পরিবার তাদের সন্তানের অপেক্ষায় প্রতিটি মুহূর্ত কষ্ট সহ্য করছে। আপনার সামান্য তথ্য তাদের বড় সাহায্য করতে পারে।
আমরা কি এই বার্তাটি আরও মানুষের কাছে পৌঁছে দিতে শেয়ার করতে পারি?`,
        posterLink: "https://drive.google.com/file/d/1SZ4lULqHJpUzk1RpVTRHwK1czG-QWBXD/view?usp=sharing",
        videoLink: ""
    },
    {
        name: "মোঃ মুস্তাফিজ",
        seat: "দিনাজপুর ৫ আসন ",
        dates: "২৩ ডিসেম্বর, ২০২৫",
        image_src: {
            small: mustafizImg,
            large: mustafizImg
        },
        story: `২০২৫ সালের ২৩শে ডিসেম্বর, শীতের এক সন্ধ্যায় পার্বতীপুরের আকাশ যখন কুয়াশায় ঢেকে যাচ্ছিল, ঠিক তখনই একটি পরিবারের সব আনন্দ চিরতরে ফিকে হয়ে যায়। ১৪ বছরের কিশোর মুস্তাফিজ প্রতিদিনের মতোই বাড়ির পাশে ব্যাডমিন্টন খেলছিল। র‍্যাকেটের প্রতিটি শব্দ আর তারুণ্যের প্রাণচঞ্চলতায় মুখরিত ছিল চারপাশ। কিন্তু সন্ধ্যা গড়িয়ে রাত নামলেও, সেই চঞ্চল ছেলেটি আর ঘরে ফেরেনি।
মুস্তাফিজের বাবা একজন শ্রবণ প্রতিবন্ধী। তিনি হয়তো কানে শুনতে পান না, কিন্তু সন্তানের জন্য তার বুকের ভেতরের হাহাকার কোনো শব্দের চেয়ে কম নয়। যে বাবা মুখে কথা বলতে পারেন না, তার চোখের জল আর অস্থির পায়চারি আজ এক নিস্তব্ধ আর্তনাদে পরিণত হয়েছে। এর আগেও মুস্তাফিজ একবার নিখোঁজ হয়ে দ্রুত ফিরে এসেছিল, তাই পরিবার হয়তো ভেবেছিল এবারও হয়তো সে কোনো পরিচিত মুখ হয়ে ফিরে আসবে। কিন্তু সময় যত গড়াচ্ছে, অন্ধকার যেন আরও ঘনীভূত হচ্ছে।`,
        posterLink: "https://drive.google.com/file/d/1-maFRVNBwzhGHKx9UP-11qOP7fRJGhc4/view?usp=sharing"
    },
    {
        name: "রেংনায়া মুরুং",
        seat: "ঢাকা-১৮ আসন ",
        dates: "২৫ সেপ্টেম্বর, ২০২৫",
        image_src: {
            small: rengnayaMurung,
            large: rengnayaMurung
        },
        story: `স্কুল হোস্টেলের সেই হাস্যজ্জল মুখ, যার হাসিতে প্রাণবন্ত থাকতো হোস্টেলের প্রতিটি কোনা|
  কিন্তু সেপ্টেম্বরের কোনো এক নিকষ কালো প্রহরে সেই হাসি মিলিয়ে যায় অজানায়|
  স্কুল কর্তৃপক্ষ জানে না, জানে না হোস্টেলের ফুল বাগানের ছোট ফুলটি , কোথায় হারালো সেই হাসিমুখ, নিষ্পাপ মুরং|
  পরিবার আজও খুঁজে চলেছে সেই অজানা ঠিকানা |`,
        posterLink: "https://drive.google.com/file/d/1z2z4mUIsyruEq3_G9epES0Q87ilcCrB6/view?usp=sharing"
    },
    {
        name: "রবিউল",
        seat: "ঢাকা-১৩ আসন ",
        dates: "৬ ডিসেম্বর, ২০২৫",
        image_src: {
            small: robiulImg,
            large: robiulImg
        },
        story: `ভিড়ের মাঝে হঠাৎ হারিয়ে যায় ১২ বছরের কিশোরী এইচ শেহজাদি হাসনা।
০৬/১২/২০২৫, শনিবার—ঘোটা বাস স্ট্যান্ড থেকে সে আর বাড়ি ফেরেনি।
শ্যামলা গায়ের রং, গোল মুখ, উচ্চতা প্রায় ৪ ফুট—এই চেহারার মেয়েটিকে যদি কেউ দেখে থাকেন,
দয়া করে একটি ফোন করুন।
একটি খবরই ফিরিয়ে দিতে পারে একটি শিশুকে তার পরিবারের কাছে।
মানবিক অনুরোধ—দয়া করে শেয়ার করুন।`,
        posterLink: "https://drive.google.com/file/d/1nwEi3dAl89onB-fnRUEr7Yke_H3EcmZ-/view?usp=sharing"
    },
    {
        name: "রিহান হোসেন",
        seat: "ঢাকা-১৮ আসন ",
        dates: "২৩ জানুয়ারি ২০২৬",
        image_src: {
            small: rihanHossain,
            large: rihanHossain
        },
        story: `মুকুন্দপুর গ্রামের আকাশ আজ ভারী হয়ে আছে।  ছোট্ট রিহান হুসাইন হারিয়ে গেছে—একটা পরিবারের হাসি, আশা আর স্বপ্ন যেন হঠাৎ করেই অদৃশ্য হয়ে গেছে। সে শুধু একটা বাচ্চা না, সে একটা পরিবারের পুরো পৃথিবী। মানবিকতার খাতিরে অনুরোধ—যদি কেউ তাকে দেখে থাকেন বা কোনো তথ্য জানেন, দয়া করে যোগাযোগ করুন। আপনার একটা ছোট্ট সহানুভূতি, একটা শেয়ার, একটা ফোন কলই হতে পারে রিহানের ঘরে ফিরে আসার পথ ।`,
        posterLink: "https://drive.google.com/file/d/1OJrdY51WBnp2QUI3A4fvLWew9sIj9Kas/view?usp=sharing"
    },
    {
        name: "আব্দুল মজিদ",
        seat: "ঢাকা-১৮ আসন ",
        dates: "১৬ সেপ্টেম্বর, ২০২৫",
        image_src: {
            small: abdulMazidImg,
            large: abdulMazidImg
        },
        story: `নরম বিকেলের আলোয় রানাভোলা উত্তর রোডের মোড়টা ছিল চেনা কোলাহলে ভরা। মেঘকা মেম্বারের বাড়ির পাশের মাঠে সেদিন খেলছিল আড়াই বছরের ছোট্ট আব্দুল মাজিদ। ফর্সা গায়ের রং, পরনে সাদা কাপড়—হাসিতে ভরা তার ছোট্ট মুখটা যেন মাঠের সবুজে আলাদা করে ঝিলমিল করছিল।

কিন্তু মুহূর্তের অসাবধানতায় খেলাটা থেমে গেল। ৭ই মার্চ ২০২৫—সেদিনের বিকেল থেকে আব্দুল মাজিদ আর ফিরে এল না। বাবা মো. লালচান, মা মোহা. মিম—দু’জনেই পথ চেয়ে রইলেন, ডাক দিলেন নাম ধরে, মাঠ পেরিয়ে গলি-ঘুপচি খুঁজলেন। উত্তর এল না।

রাত নামল, তবু আশাটা নিভল না। কারণ কোথাও না কোথাও নিশ্চয়ই কেউ একজন তাকে দেখেছে—কেউ একজন ভালো মানুষ। যদি কোনো সদয় হৃদয় ছোট্ট ছেলেটির সন্ধান পেয়ে থাকেন, তবে দয়া করে পরিচিত ঠিকানায় খবর দিন। একটি ফোনকলেই হয়তো আবার জ্বলে উঠবে একটি ঘর, ফিরে আসবে এক শিশুর হাসি।`,
        posterLink: "https://drive.google.com/file/d/1zH8cOor_ifyJKnK8jacDfHmHnu-by9pQ/view?usp=sharing"
    }
];
}),
"[project]/src/components/Memories.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Memories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MemoriesModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MemoriesModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Memory$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Memory.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Memories() {
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const hash = window.location.hash;
        if (hash) {
            const memoryName = hash.replace("#", "").replace(/-/g, " ");
            const foundMemory = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memories"].find((memory)=>memory.name === memoryName);
            if (foundMemory) {
                setTimeout(()=>{
                    setIsVisible(true);
                    window.history.replaceState(null, "", window.location.origin);
                    setSelected(foundMemory);
                }, 0);
            }
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:container px-6 mx-auto",
                style: {
                    background: '#161819',
                    minHeight: '100vh'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl md:text-5xl font-bold text-center mt-12 mb-4 text-white px-4 md:px-6",
                        style: {
                            fontFamily: 'CustomFont, Arial, Helvetica, sans-serif',
                            color: '#E82063'
                        },
                        children: "নিখোঁজ শিশুদের তালিকা"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Memories.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base max-w-xl mx-auto text-center mb-6 text-white px-4 md:px-12",
                        style: {
                            fontFamily: 'CustomFont2, Arial, Helvetica, sans-serif'
                        },
                        children: "চলুন, আমরা সবাই একসঙ্গে কাজ করি যেসব শিশু এখনো নিখোঁজ রয়েছে, তাদের নিরাপদে ঘরে ফিরিয়ে আনার জন্য।"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Memories.tsx",
                        lineNumber: 35,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memories"].map((memory, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Memory$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                memory: memory,
                                handleOpen: ()=>{
                                    setIsVisible(true);
                                    setSelected(memory);
                                }
                            }, idx, false, {
                                fileName: "[project]/src/components/Memories.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Memories.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Memories.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MemoriesModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                selected: selected,
                isVisible: isVisible,
                handleClose: ()=>{
                    setIsVisible(false);
                    setSelected(undefined);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Memories.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8826fc2c._.js.map