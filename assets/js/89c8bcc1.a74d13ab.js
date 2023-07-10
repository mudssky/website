"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8679],{6011:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>b,frontMatter:()=>d,metadata:()=>$,toc:()=>c});var a=t(1966),f=(t(9496),t(9613)),l=t(8517);const i='// colors.scss\n\n$slate: (\n  50: #f8fafc,\n  100: #f1f5f9,\n  200: #e2e8f0,\n  300: #cbd5e1,\n  400: #94a3b8,\n  500: #64748b,\n  600: #475569,\n  700: #334155,\n  800: #1e293b,\n  900: #0f172a,\n  950: #020617,\n);\n$gray: (\n  50: #f9fafb,\n  100: #f3f4f6,\n  200: #e5e7eb,\n  300: #d1d5db,\n  400: #9ca3af,\n  500: #6b7280,\n  600: #4b5563,\n  700: #374151,\n  800: #1f2937,\n  900: #111827,\n  950: #030712,\n);\n$zinc: (\n  50: #fafafa,\n  100: #f4f4f5,\n  200: #e4e4e7,\n  300: #d4d4d8,\n  400: #a1a1aa,\n  500: #71717a,\n  600: #52525b,\n  700: #3f3f46,\n  800: #27272a,\n  900: #18181b,\n  950: #09090b,\n);\n$neutral: (\n  50: #fafafa,\n  100: #f5f5f5,\n  200: #e5e5e5,\n  300: #d4d4d4,\n  400: #a3a3a3,\n  500: #737373,\n  600: #525252,\n  700: #404040,\n  800: #262626,\n  900: #171717,\n  950: #0a0a0a,\n);\n$stone: (\n  50: #fafaf9,\n  100: #f5f5f4,\n  200: #e7e5e4,\n  300: #d6d3d1,\n  400: #a8a29e,\n  500: #78716c,\n  600: #57534e,\n  700: #44403c,\n  800: #292524,\n  900: #1c1917,\n  950: #0c0a09,\n);\n$red: (\n  50: #fef2f2,\n  100: #fee2e2,\n  200: #fecaca,\n  300: #fca5a5,\n  400: #f87171,\n  500: #ef4444,\n  600: #dc2626,\n  700: #b91c1c,\n  800: #991b1b,\n  900: #7f1d1d,\n  950: #450a0a,\n);\n$orange: (\n  50: #fff7ed,\n  100: #ffedd5,\n  200: #fed7aa,\n  300: #fdba74,\n  400: #fb923c,\n  500: #f97316,\n  600: #ea580c,\n  700: #c2410c,\n  800: #9a3412,\n  900: #7c2d12,\n  950: #431407,\n);\n$amber: (\n  50: #fffbeb,\n  100: #fef3c7,\n  200: #fde68a,\n  300: #fcd34d,\n  400: #fbbf24,\n  500: #f59e0b,\n  600: #d97706,\n  700: #b45309,\n  800: #92400e,\n  900: #78350f,\n  950: #451a03,\n);\n$yellow: (\n  50: #fefce8,\n  100: #fef9c3,\n  200: #fef08a,\n  300: #fde047,\n  400: #facc15,\n  500: #eab308,\n  600: #ca8a04,\n  700: #a16207,\n  800: #854d0e,\n  900: #713f12,\n  950: #422006,\n);\n$lime: (\n  50: #f7fee7,\n  100: #ecfccb,\n  200: #d9f99d,\n  300: #bef264,\n  400: #a3e635,\n  500: #84cc16,\n  600: #65a30d,\n  700: #4d7c0f,\n  800: #3f6212,\n  900: #365314,\n  950: #1a2e05,\n);\n$green: (\n  50: #f0fdf4,\n  100: #dcfce7,\n  200: #bbf7d0,\n  300: #86efac,\n  400: #4ade80,\n  500: #22c55e,\n  600: #16a34a,\n  700: #15803d,\n  800: #166534,\n  900: #14532d,\n  950: #052e16,\n);\n$emerald: (\n  50: #ecfdf5,\n  100: #d1fae5,\n  200: #a7f3d0,\n  300: #6ee7b7,\n  400: #34d399,\n  500: #10b981,\n  600: #059669,\n  700: #047857,\n  800: #065f46,\n  900: #064e3b,\n  950: #022c22,\n);\n$teal: (\n  50: #f0fdfa,\n  100: #ccfbf1,\n  200: #99f6e4,\n  300: #5eead4,\n  400: #2dd4bf,\n  500: #14b8a6,\n  600: #0d9488,\n  700: #0f766e,\n  800: #115e59,\n  900: #134e4a,\n  950: #042f2e,\n);\n$cyan: (\n  50: #ecfeff,\n  100: #cffafe,\n  200: #a5f3fc,\n  300: #67e8f9,\n  400: #22d3ee,\n  500: #06b6d4,\n  600: #0891b2,\n  700: #0e7490,\n  800: #155e75,\n  900: #164e63,\n  950: #083344,\n);\n$sky: (\n  50: #f0f9ff,\n  100: #e0f2fe,\n  200: #bae6fd,\n  300: #7dd3fc,\n  400: #38bdf8,\n  500: #0ea5e9,\n  600: #0284c7,\n  700: #0369a1,\n  800: #075985,\n  900: #0c4a6e,\n  950: #082f49,\n);\n$blue: (\n  50: #eff6ff,\n  100: #dbeafe,\n  200: #bfdbfe,\n  300: #93c5fd,\n  400: #60a5fa,\n  500: #3b82f6,\n  600: #2563eb,\n  700: #1d4ed8,\n  800: #1e40af,\n  900: #1e3a8a,\n  950: #172554,\n);\n$indigo: (\n  50: #eef2ff,\n  100: #e0e7ff,\n  200: #c7d2fe,\n  300: #a5b4fc,\n  400: #818cf8,\n  500: #6366f1,\n  600: #4f46e5,\n  700: #4338ca,\n  800: #3730a3,\n  900: #312e81,\n  950: #1e1b4b,\n);\n$violet: (\n  50: #f5f3ff,\n  100: #ede9fe,\n  200: #ddd6fe,\n  300: #c4b5fd,\n  400: #a78bfa,\n  500: #8b5cf6,\n  600: #7c3aed,\n  700: #6d28d9,\n  800: #5b21b6,\n  900: #4c1d95,\n  950: #2e1065,\n);\n$purple: (\n  50: #faf5ff,\n  100: #f3e8ff,\n  200: #e9d5ff,\n  300: #d8b4fe,\n  400: #c084fc,\n  500: #a855f7,\n  600: #9333ea,\n  700: #7e22ce,\n  800: #6b21a8,\n  900: #581c87,\n  950: #3b0764,\n);\n$fuchsia: (\n  50: #fdf4ff,\n  100: #fae8ff,\n  200: #f5d0fe,\n  300: #f0abfc,\n  400: #e879f9,\n  500: #d946ef,\n  600: #c026d3,\n  700: #a21caf,\n  800: #86198f,\n  900: #701a75,\n  950: #4a044e,\n);\n$pink: (\n  50: #fdf2f8,\n  100: #fce7f3,\n  200: #fbcfe8,\n  300: #f9a8d4,\n  400: #f472b6,\n  500: #ec4899,\n  600: #db2777,\n  700: #be185d,\n  800: #9d174d,\n  900: #831843,\n  950: #500724,\n);\n$rose: (\n  50: #fff1f2,\n  100: #ffe4e6,\n  200: #fecdd3,\n  300: #fda4af,\n  400: #fb7185,\n  500: #f43f5e,\n  600: #e11d48,\n  700: #be123c,\n  800: #9f1239,\n  900: #881337,\n  950: #4c0519,\n);\n\n// \u9ed8\u8ba4\u989c\u8272\u503c\u4e3a400\uff0c\u4ece\u989c\u8272\u5bf9\u8c61\u91cc\u9762\u53d6\n$defaultColorValue: 400;\n\n// prettier-ignore\n$defaultColor:(\n\t"slate":map-get($map: $slate, $key:$defaultColorValue ),\n\t"gray":map-get($map: $gray, $key:$defaultColorValue )  ,\n\t"zinc":map-get($map: $zinc, $key:$defaultColorValue )  ,\n\t"neutral":map-get($map: $neutral, $key:$defaultColorValue ),\n\t"stone":map-get($map: $stone, $key:$defaultColorValue ),\n\t"red":map-get($map: $red, $key:$defaultColorValue )    ,\n\t"orange":map-get($map: $orange, $key:$defaultColorValue ),\n\t"amber":map-get($map: $amber, $key:$defaultColorValue ),\n\t"yellow":map-get($map: $yellow, $key:$defaultColorValue ),\n\t"lime":map-get($map: $lime, $key:$defaultColorValue )  ,\n\t"green":map-get($map: $green, $key:$defaultColorValue ),\n\t"teal":map-get($map: $teal, $key:$defaultColorValue )  ,\n\t"cyan":map-get($map: $cyan, $key:$defaultColorValue )  ,\n\t"sky":map-get($map: $sky, $key:$defaultColorValue )    ,\n\t"blue":map-get($map: $blue, $key:$defaultColorValue )  ,\n\t"indigo":map-get($map: $indigo, $key:$defaultColorValue ),\n\t"violet":map-get($map: $violet, $key:$defaultColorValue ),\n\t"purple":map-get($map: $purple, $key:$defaultColorValue ),\n\t"fuchsia":map-get($map: $fuchsia, $key:$defaultColorValue ),\n\t"pink":map-get($map: $pink, $key:$defaultColorValue )  ,\n\t"rose":map-get($map: $rose, $key:$defaultColorValue )  ,\n);\n\n// prettier-ignore\n$colors:(\n\t"slate":$slate,\n\t"gray":$gray,\n\t"zinc":$zinc,\n\t"neutral":$neutral,\n\t"stone":$stone,\n\t"red":$red,\n\t"orange":$orange,\n\t"amber":$amber,\n\t"yellow":$yellow,\n\t"lime":$lime,\n\t"green":$green,\n\t"teal":$teal,\n\t"cyan":$cyan,\n\t"sky":$sky,\n\t"blue":$blue,\n\t"indigo":$indigo,\n\t"violet":$violet,\n\t"purple":$purple,\n\t"fuchsia":$fuchsia,\n\t"pink":$pink,\n\t"rose":$rose,\n);\n\n// text-red bg-red\n@each $colorKey, $color in $defaultColor {\n  .text-#{$colorKey} {\n    color: $color;\n  }\n  .bg-#{$colorKey} {\n    background: $color;\n  }\n}\n\n// text-red-100 bg-red-100 ...\n@each $colorKey, $colorDict in $colors {\n  @each $index, $color in $colorDict {\n    .text-#{$colorKey}-#{$index} {\n      color: $color;\n    }\n    .bg-#{$colorKey}-#{$index} {\n      background: $color;\n    }\n    .border-#{$colorKey}-#{$index} {\n      border-color: $color;\n    }\n  }\n}\n',o="// base.scss\n\n@import './colors.scss';\n\n// \u5c3a\u5bf8\u5355\u4f4d\n// pc\u4e0a\u7528px\n// uniapp\u4e0a\u6211\u4f1a\u76f4\u63a5\u6362\u6210rpx\uff0c\u5927\u5c0f\u4e582\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u76f4\u63a5\u7528\u8bbe\u8ba1\u7a3f\u4e0a\u7684\u53c2\u6570\u4e86\u3002\n$unit: px;\n\n// Layout ===========================\n// overflow----------------------------\n.overflow-hidden {\n  overflow: hidden;\n}\n\n.overflow-auto {\n  overflow: auto;\n}\n.overflow-scroll {\n  overflow: scroll;\n}\n\n// Flexbox & Grid==================================\n\n// flex ---------------------\n.flex {\n  display: flex;\n}\n// Justify Content----------------------\n\n.justify-center {\n  justify-content: center;\n}\n.justify-start {\n  justify-content: start;\n}\n.justify-end {\n  justify-content: end;\n}\n.justify-between {\n  justify-content: space-between;\n}\n// Align Items---------------------------\n\n.items-center {\n  align-items: center;\n}\n\n// Spacing==============================================\n// margin----------------------------------\n// padding--------------------------------------------\n.h-200 {\n  height: 200px;\n}\n$pixels: 400;\n@for $i from 2 through $pixels {\n  // \u53ea\u751f\u6210\u5076\u6570\u9879\uff0c\u51cf\u5c11\u751f\u6210\u7684\u4ee3\u7801\n  @if ($i %2 == 0) {\n    $length: $i + $unit;\n    .ml-#{$i } {\n      margin-left: $length;\n    }\n    .mb-#{$i } {\n      margin-bottom: $length;\n    }\n    .mr-#{$i } {\n      margin-right: $length;\n    }\n    .mt-#{$i } {\n      margin-top: $length;\n    }\n\n    .p-#{$i } {\n      padding: $length;\n    }\n    .pl-#{$i } {\n      padding-left: $length;\n    }\n    .pb-#{$i } {\n      padding-bottom: $length;\n    }\n    .px-#{$i } {\n      padding-left: $length;\n      padding-right: $length;\n    }\n    .py-#{$i} {\n      padding-top: $length;\n      padding-bottom: $length;\n    }\n    .h-#{$i} {\n      height: $length;\n    }\n    .w-#{$i} {\n      width: $length;\n    }\n    .space-x-#{$i} > :not([hidden]) ~ :not([hidden]) {\n      --tw-space-x-reverse: 0;\n      margin-right: $length;\n      margin-left: $length;\n    }\n  }\n}\n\n// Typography=====================================================\n// Text Align------------------------------------------------------\n.text-center {\n  text-align: center;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n// font\u76f8\u5173\n\n@for $i from 12 through 50 {\n  .text-#{$i} {\n    font-size: $i + $unit;\n  }\n}\n\n.font-bold {\n  font-weight: bold;\n}\n\n@for $i from 1 through 10 {\n  .font-#{$i * 100} {\n    font-weight: $i * 100 + $unit;\n  }\n}\n\n// Interactivity=====================================================================\n// cursor----------------------------------------------------------------------------\\\n.cursor-pointer {\n  cursor: pointer;\n}\n\n//Borders===========================================================\n\n// Border width-------------------------\n\n.border-t-1 {\n  border-top: 1rpx solid #eee;\n}\n\n// Sizing========================================================================\n\n// Width-------------------------------------------------------------------------\n.w-full {\n  width: 100%;\n}\n\n// Height-------------------------------------------------------------------------\n.h-full {\n  height: 100%;\n}\n",d={sidebar_position:1,sidebar_label:"\u4f7f\u7528 scss \u5b9e\u73b0 tailwind \u7684\u6837\u5f0f",sidebar_class_name:"green"},r="\u4f7f\u7528 scss \u5b9e\u73b0 tailwind \u7684\u6837\u5f0f",$={unversionedId:"snippets/css/tailwind",id:"snippets/css/tailwind",title:"\u4f7f\u7528 scss \u5b9e\u73b0 tailwind \u7684\u6837\u5f0f",description:"\u60f3\u5728\u9879\u76ee\u91cc\u9762\u4f7f\u7528 tailwind css,\u4f46\u662f\u9879\u76ee\u7684\u811a\u624b\u67b6\u592a\u8001\uff0c\u5b98\u65b9\u7684\u5b89\u88c5\u6587\u6863\u91cc\u9762\u90fd\u6ca1\u6709\u5bf9\u5e94\u7684\u6587\u6863\u3002\u6211\u8bb0\u5f97\u662f\u53ef\u4ee5\u5b89\u88c5\u7684\uff0c\u4f46\u662f\u9700\u8981\u5b89\u88c5\u4e00\u4e2a\u517c\u5bb9\u7248\u672c\u7684\uff0c\u611f\u89c9\u6709\u70b9\u9ebb\u70e6\u6240\u4ee5\u5c31\u653e\u5f03\u4e86\u3002",source:"@site/docs/snippets/css/tailwind.mdx",sourceDirName:"snippets/css",slug:"/snippets/css/tailwind",permalink:"/website/docs/snippets/css/tailwind",draft:!1,tags:[],version:"current",lastUpdatedAt:1688959469,formattedLastUpdatedAt:"Jul 10, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u4f7f\u7528 scss \u5b9e\u73b0 tailwind \u7684\u6837\u5f0f",sidebar_class_name:"green"},sidebar:"snippetsSidebar",previous:{title:"request \u5c01\u88c5",permalink:"/website/docs/snippets/JavaScript/request"}},s={},c=[{value:"taiwind \u7684\u8c03\u8272\u76d8",id:"taiwind-\u7684\u8c03\u8272\u76d8",level:2},{value:"\u57fa\u7840\u6837\u5f0f",id:"\u57fa\u7840\u6837\u5f0f",level:2}],p={toc:c},u="wrapper";function b(n){let{components:e,...t}=n;return(0,f.kt)(u,(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,f.kt)("h1",{id:"\u4f7f\u7528-scss-\u5b9e\u73b0-tailwind-\u7684\u6837\u5f0f"},"\u4f7f\u7528 scss \u5b9e\u73b0 tailwind \u7684\u6837\u5f0f"),(0,f.kt)("p",null,"\u60f3\u5728\u9879\u76ee\u91cc\u9762\u4f7f\u7528 tailwind css,\u4f46\u662f\u9879\u76ee\u7684\u811a\u624b\u67b6\u592a\u8001\uff0c\u5b98\u65b9\u7684\u5b89\u88c5\u6587\u6863\u91cc\u9762\u90fd\u6ca1\u6709\u5bf9\u5e94\u7684\u6587\u6863\u3002\u6211\u8bb0\u5f97\u662f\u53ef\u4ee5\u5b89\u88c5\u7684\uff0c\u4f46\u662f\u9700\u8981\u5b89\u88c5\u4e00\u4e2a\u517c\u5bb9\u7248\u672c\u7684\uff0c\u611f\u89c9\u6709\u70b9\u9ebb\u70e6\u6240\u4ee5\u5c31\u653e\u5f03\u4e86\u3002",(0,f.kt)("br",{parentName:"p"}),"\n","\u8fd8\u6709\u4e00\u4e2a\u95ee\u9898\uff0c\u5982\u679c\u5728 uniapp \u4e2d\u4f7f\u7528 tailwind\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u6709\u4e9b\u6837\u5f0f\u5199\u6cd5\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u4e0d\u517c\u5bb9\u7684\u60c5\u51b5\uff0c\u7f51\u4e0a\u6ca1\u627e\u5230\u4ec0\u4e48\u597d\u7528\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u6240\u4ee5\u4e0d\u5982\u81ea\u5df1\u624b\u5199\u3002\u3002\u3002",(0,f.kt)("br",{parentName:"p"}),"\n","\u8fd8\u6709\u4e00\u4e2a\u65b9\u6cd5\u662f\uff0c\u53ef\u4ee5\u4f7f\u7528 tailwind \u7684\u547d\u4ee4\u884c\u6765\u8f6c\u6362\u6837\u5f0f\uff0c\u4f46\u662f\u4e00\u6837\u662f\u56e0\u4e3a\u517c\u5bb9\u6027\u95ee\u9898\u3002\u6bd4\u5982 tailwind \u7684",(0,f.kt)("inlineCode",{parentName:"p"},"[]"),"\u8bed\u6cd5\uff0c\u4f3c\u4e4e\u8fd9\u4e2a\u7b26\u53f7\u5728\u6709\u4e9b\u5c0f\u7a0b\u5e8f\u4e2d\uff0c\u4e0d\u80fd\u4f7f\u7528\u3002\u53e6\u5916\uff0c\u6bcf\u6b21\u9879\u76ee\u90fd\u8981\u5f00\u4e00\u4e2a\n\u547d\u4ee4\u884c\u6765 watch \u611f\u89c9\u4e5f\u592a\u9ebb\u70e6\u592a\u8822\u4e86\u3002"),(0,f.kt)("p",null,"\u6240\u4ee5\u6211\u6700\u540e\u60f3\u5230\u4e86\u8fd9\u4e2a\u7528 scss \u6765\u624b\u5199\u7684\u65b9\u6cd5\uff0c\u4e5f\u80fd\u5145\u5206\u5229\u7528 scss \u7684\u4e00\u4e9b\u8bed\u6cd5\uff0c\u539f\u6765\u4e5f\u5c31\u7528\u4e00\u4e0b\u53d8\u91cf\uff0c\u5d4c\u5957\u8fd8\u6709 mixin \u4e4b\u7c7b\u7684\u3002\u8fd9\u6b21\u53ef\u4ee5\u7528\u5230\u5faa\u73af\u3002\u3002\u3002\n\u6709\u4e2a\u95ee\u9898\u5c31\u662f\u8fd9\u6837\u751f\u6210\u7684 css \u4f53\u79ef\u4f1a\u5927\u4e00\u70b9\u3002\u751f\u6210\u7684\u6539\u4ee3\u7801\u4f1a\u591a\u4e2a\u51e0\u5343\u51e0\u4e07\u884c\u3002\u7ed3\u679c\u5c31\u662f\u5305\u4f53\u79ef\u4f1a\u591a\u51e0\u767e kb\uff0c\u751a\u81f3\u51e0 mb\u3002 \u800c\u4e14\u4f60\u6bcf\u6b21\u7f16\u8bd1\u7684\u65f6\u5019\u90fd\u4f1a\u6162\u4e00\u70b9\u3002\n\u540e\u6765\u6211\u628a\u9879\u76ee\u811a\u624b\u67b6\u5347\u7ea7\u4e86\uff0c\u76f4\u63a5\u5b89\u88c5 tailwind\uff0c\u4e0d\u7528 scss \u4ee5\u540e\uff0c\u4f18\u5316\u4e86 1mb \u591a\u7684\u4f53\u79ef\u3002"),(0,f.kt)("p",null,"\u6240\u4ee5\u5efa\u8bae\u54ea\u4e9b\u5c3a\u5bf8\u76f8\u5173\u7684\u4ee3\u7801\u8fd8\u662f\u6309\u9700\u6dfb\u52a0\uff0c\u4e0d\u8981\u4e00\u6b21\u6027\u751f\u6210\u5f88\u591a\u6ca1\u6709\u4f7f\u7528\u7684\u6837\u5f0f\uff0c\u8fd9\u6837\u4f53\u79ef\u5c31\u4f1a\u5c0f\u5f88\u591a"),(0,f.kt)("p",null,"\u8fd8\u6709\u5c31\u662f\u4ee3\u7801\u53ef\u4ee5\u6309\u7167 tailwind \u5b98\u7f51\u4fa7\u8fb9\u680f\u90a3\u6837\u7ec4\u7ec7\uff0c\u56e0\u4e3a\u6211\u76ee\u524d\u53ea\u662f\u7b80\u5355\u4f7f\u7528\u4e86\u4e00\u4e9b\uff0c\u6240\u4ee5\u8fd8\u6ca1\u6709\u641e\u90a3\u4e48\u89c4\u8303\uff0c\u540e\u7eed\u6709\u65b0\u9700\u6c42\u7684\u7248\u672c\uff0c\u6211\u5e94\u8be5\u4f1a\u4f18\u5316\u4e00\u4e9b\u7ed3\u6784\uff0c\u628a\u4e0d\u7528\u7684\u4ee3\u7801\u79fb\u9664"),(0,f.kt)("h2",{id:"taiwind-\u7684\u8c03\u8272\u76d8"},"taiwind \u7684\u8c03\u8272\u76d8"),(0,f.kt)(l.Z,{language:"scss",mdxType:"CodeBlock"},i),(0,f.kt)("h2",{id:"\u57fa\u7840\u6837\u5f0f"},"\u57fa\u7840\u6837\u5f0f"),(0,f.kt)(l.Z,{language:"scss",mdxType:"CodeBlock"},o))}b.isMDXComponent=!0}}]);