"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7492],{3081:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=r(1527),a=r(7540),i=r(7411);const s="/**\n * es2016 at \u65b9\u6cd5\u5b9e\u73b0\n * @param arr\n * @param n\n * @returns\n */\nexport function at<T = any>(arr: Array<T>, n: number) {\n  let index = Math.trunc(n) || 0\n\n  // \u5982\u679c\u7d22\u5f15\u4e3a\u8d1f\u6570\uff0c\u5219\u4ece\u6570\u7ec4\u672b\u5c3e\u5f00\u59cb\u8ba1\u7b97\n  if (index < 0) {\n    index += arr.length\n  }\n  // \u68c0\u67e5\u7d22\u5f15\u662f\u5426\u8d8a\u754c\n  if (index < 0 || index >= arr.length) {\n    return undefined\n  }\n  return arr[index]\n}\n\n/**\n * \u5c01\u88c5\u53ef\u9009\u94fe\u548c\u7a7a\u503c\u5408\u5e76\u7b49\u64cd\u4f5c\n * \u5176\u5b9e\u53ef\u9009\u94fe\u51fa\u6765\u4e4b\u524d\uff0c\u7c7b\u4f3c\u7684\u9700\u6c42\u7528\u7684\u662f\u77ed\u8def\u8fd0\u7b97\u7b26&&\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u7684\u95ee\u9898\u662f\u5197\u4f59\u4ee3\u7801\u592a\u591a\u3002\n */\nexport class OptionalChain {\n  private obj\n  constructor(value: any) {\n    this.obj = value\n  }\n  get(property: string) {\n    if (this.obj == null || this.obj == undefined) {\n      return new OptionalChain(undefined)\n    }\n    const value = this.obj[property]\n    return new OptionalChain(value)\n  }\n  call(method, ...args) {\n    if (this.obj == null) {\n      return new OptionalChain(undefined)\n    }\n    const value = this.obj[method]?.(...args)\n    return new OptionalChain(value)\n  }\n  value() {\n    return this.obj\n  }\n\n  /**\n   * ?? \u63a7\u5236\u5408\u5e76\u8fd0\u7b97\u7b26\u7684\u6a21\u62df\n   * @param defaultValue\n   * @returns\n   */\n  valueOnDefault(defaultValue: any) {\n    if (this.obj === undefined || this.obj === null) {\n      return defaultValue\n    }\n    return this.obj\n  }\n}\n/**\n * \u53ef\u9009\u94fe\u5de5\u5382\u51fd\u6570\n * @param value\n * @returns\n */\nexport function createOptionalChain(value: any) {\n  return new OptionalChain(value)\n}\n\n/**\n * python\u4e2d\u7684range\u51fd\u6570\n * @param start\n * @param end\n * @param step\n * @returns\n */\nexport function range(start: number, end?: number, step = 1) {\n  return Array.from(rangeIter(start, end, step))\n}\n/**\n * python\u4e2d\u7684range \u8fed\u4ee3\u5668\u5b9e\u73b0\n * @param start\n * @param end\n * @param step\n */\nexport function* rangeIter(start: number, end?: number, step = 1) {\n  if (typeof end === 'undefined') {\n    end = start\n    start = 0\n  }\n\n  // \u8fdb\u884c\u53c2\u6570\u68c0\u67e5\n  if (step === 0) {\n    throw new Error('step can not be zero')\n  }\n\n  if (\n    !(\n      Number.isInteger(start) &&\n      Number.isInteger(end) &&\n      Number.isInteger(step)\n    )\n  ) {\n    throw new Error('unsupport decimal number')\n  }\n  if (step > 0) {\n    for (let i = start; i < end; i += step) {\n      yield i\n    }\n  } else {\n    for (let i = start; i > end; i += step) {\n      yield i\n    }\n  }\n}\n\n/**\n * \u4e8c\u5206\u67e5\u627e\u8ba1\u7b97\u63d2\u5165\u70b9\uff0c\u627e\u5230\u7b2c\u4e00\u4e2a\u7b49\u4e8e\u76ee\u6807\u503c\u6216\u8005\u5de6\u8fb9\u7684\u4f4d\u7f6e\n * @param arr \u5347\u5e8f\u6709\u5e8f\u5217\u8868\n * @param val\n * @returns\n */\nexport function bisectLeft(arr: number[], val: number) {\n  let low = 0\n  let high = arr.length\n\n  while (low < high) {\n    const mid = Math.floor((low + high) / 2)\n    // \u8fd9\u6837\u5f97\u51fa\u7684low\u6700\u5927\u503c\u5c31\u662fval,\u4e0d\u4f1a\u8d85\u8fc7val\n    if (val > arr[mid]) {\n      low = mid + 1\n    } else {\n      high = mid\n    }\n  }\n\n  return low\n}\n\n/**\n * \u4e8c\u5206\u67e5\u627e\u8ba1\u7b97\u63d2\u5165\u70b9 \u627e\u5230\u7b2c\u4e00\u4e2a\u5927\u4e8e\u76ee\u6807\u503c\u7684\u4f4d\u7f6e\n * @param arr \u5347\u5e8f\u6570\u7ec4\n * @param val\n * @returns\n */\nexport function bisectRight(arr: number[], val: number) {\n  // bisectRight\u7684\u63d2\u5165\u70b9\u4f4d\u4e8ebisectLeft\u7684\u53f3\u4fa7\n  let index = bisectLeft(arr, val)\n  // console.log({ index, val })\n  if (val >= arr[index]) {\n    return index + 1\n  }\n\n  return index\n}\n\n/**\n * \u548cbisect right\u4e00\u6837\uff0c\u8fd4\u56de\u5927\u4e8eval\u7684\u7b2c\u4e00\u4e2a\u4e0b\u6807\n * \u5728python\u4e2d\u53ef\u7528\u4e8e\u6570\u5b57\u8868\u67e5\u627e\n * def grade(score, breakpoints=[60, 70, 80, 90], grades='FDCBA'):\n    i = bisect(breakpoints, score)\n    return grades[i]\n * @param arr\n * @param val\n * @returns\n */\nexport function bisect(arr: number[], val: number): number {\n  return bisectRight(arr, val)\n}\n",l={},u="jsutils \u5c01\u88c5",o={id:"snippets/JavaScript/jsutil",title:"jsutils \u5c01\u88c5",description:"lodash \u662f\u5f88\u5e38\u7528\u7684 js \u901a\u7528\u64cd\u4f5c\u7684\u4e00\u4e2a\u5e93\u3002",source:"@site/docs/snippets/JavaScript/jsutil.mdx",sourceDirName:"snippets/JavaScript",slug:"/snippets/JavaScript/jsutil",permalink:"/website/docs/snippets/JavaScript/jsutil",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1701427550,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{},sidebar:"snippetsSidebar",previous:{title:"\u679a\u4e3e\u7c7b",permalink:"/website/docs/snippets/JavaScript/enumArray"},next:{title:"request \u5c01\u88c5",permalink:"/website/docs/snippets/JavaScript/request"}},p={},d=[{value:"\u6570\u7ec4",id:"\u6570\u7ec4",level:2}];function c(n){const e={h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"jsutils-\u5c01\u88c5",children:"jsutils \u5c01\u88c5"}),"\n",(0,t.jsx)(e.p,{children:"lodash \u662f\u5f88\u5e38\u7528\u7684 js \u901a\u7528\u64cd\u4f5c\u7684\u4e00\u4e2a\u5e93\u3002"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\u4f46\u662f\u4e00\u4e9b\u51fd\u6570\u6211\u4eec\u65e5\u5e38\u4f7f\u7528\u5230\uff0c\u4f46\u662f lodash \u91cc\u9762\u6ca1\u6709\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u5c01\u88c5\u3002"}),"\n",(0,t.jsx)(e.li,{children:"JavaScript \u4e00\u4e9b\u65b0\u7279\u6027\uff0c\u6bd4\u8f83\u5b9e\u7528\uff0c\u4f46\u662f\u56e0\u4e3a\u9879\u76ee\u6846\u67b6\u6bd4\u8f83\u8001\uff0c\u6211\u4eec\u5728\u9879\u76ee\u91cc\u9762\u7528\u4e0d\u4e86\uff0c\u6240\u4ee5\u81ea\u5df1\u5c01\u88c5\u4e00\u4e0b\u5c31\u80fd\u63d0\u524d\u5b9e\u7528\u4e86\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u8fd8\u6709\u6211\u4eec\u4e0d\u6b62\u5b66\u4e60\u4e00\u79cd\u7f16\u7a0b\u8bed\u8a00\u3002\u5176\u4ed6\u8bed\u8a00\u91cc\u9762\u6bd4\u8f83\u65b9\u4fbf\u7684\u64cd\u4f5c\uff0c\u53ef\u4ee5\u8003\u8651\u642c\u5230 js \u91cc\u9762\u6765\u3002"}),"\n"]}),"\n","\n",(0,t.jsx)(e.h2,{id:"\u6570\u7ec4",children:"\u6570\u7ec4"}),"\n","\n","\n",(0,t.jsx)(i.Z,{language:"ts",children:s})]})}function h(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}}}]);