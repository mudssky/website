"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8832],{6323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(1966),r=(n(9496),n(9613)),l=n(8517);const s="// \u679a\u4e3e\u7c7b\u578b\u63a5\u53e3\nexport interface EnumArrayObj {\n  value: number | string\n  label: string //\u4e2d\u6587key\uff0c\u65b9\u4fbf\u9605\u8bfb\n  displayText?: string //\u5c55\u793a\u7684\u6587\u5b57,\u53ea\u6709\u548clabel\u4e0d\u540c\u7684\u65f6\u5019\u4f7f\u7528\uff0c\n}\n\nexport type ValueOf<T extends readonly EnumArrayObj[]> = T[number]['value']\nexport type LabelOf<T extends readonly EnumArrayObj[]> = T[number]['label']\ntype ItemOf<T extends readonly EnumArrayObj[]> = {\n  value: ValueOf<T>\n  label: LabelOf<T>\n  displayText?: string\n}\n/**\n * \u679a\u4e3e\u6570\u7ec4\u7c7b\uff0c\u7ee7\u627f\u4e86Array\n */\nexport class EnumArray<\n  T extends readonly EnumArrayObj[],\n> extends Array<EnumArrayObj> {\n  private readonly kvMap = new Map<string, ValueOf<T>>()\n  private readonly vkMap = new Map<string, LabelOf<T>>()\n  constructor(list: T) {\n    super(list.length)\n    for (let i = 0; i < list.length; i++) {\n      const item = list[i]\n      this[i] = item\n      this.kvMap.set(item.label, item.value)\n      this.vkMap.set(item.value + '', item.label)\n    }\n  }\n\n  getLabelByValue(value: ValueOf<T>) {\n    return this.vkMap.get(value + '')\n  }\n\n  getValueByLabel(label: LabelOf<T>) {\n    return this.kvMap.get(label)\n  }\n  getItemByLabel(label: LabelOf<T>): ItemOf<T> | undefined {\n    return this.find((item) => {\n      return item.label === label\n    })\n  }\n  getItemByValue(value: ValueOf<T>): ItemOf<T> | undefined {\n    return this.find((item) => {\n      return item.value === value\n    })\n  }\n  getDisplayTextByLabel(label: LabelOf<T>) {\n    const item = this.getItemByLabel(label)\n    return item?.displayText ?? label\n  }\n  getDisplayTextByValue(value: ValueOf<T>) {\n    const item = this.getItemByValue(value)\n    return item?.displayText ?? item?.label\n  }\n}\nexport function createEnum<T extends readonly EnumArrayObj[]>(enums: T) {\n  return Object.freeze(new EnumArray(enums)) // \u9700\u8981\u5347\u7ea7\u5230typescript4.9\u624d\u4e0d\u4f1a\u62a5\u9519\n  // return new EnumArray(enums)\n}\n\n// const sexList = [\n//   {\n//     label: '\u7537',\n//     value: 1,\n//   },\n//   {\n//     label: '\u5973',\n//     value: 2,\n//   },\n// ] as const\n// const sexEnum = createEnum(sexList)\n\n// export type ll = LabelOf<typeof sexList>\n// sexEnum.getValueByLabel('\u5973')\n",i={nav:{title:"\u4ee3\u7801\u7247\u6bb5",order:1},group:{title:"\u5b9e\u7528\u7c7b\u5c01\u88c5",order:1},toc:"content",tocDepth:3},u="\u679a\u4e3e\u7c7b",p={unversionedId:"snippets/JavaScript/enumArray",id:"snippets/JavaScript/enumArray",title:"\u679a\u4e3e\u7c7b",description:"\u4f7f\u7528\u6570\u7ec4\u5c06\u679a\u4e3e\u72b6\u6001\u4fe1\u606f\u4fdd\u5b58\u8d77\u6765",source:"@site/docs/snippets/JavaScript/enumArray.mdx",sourceDirName:"snippets/JavaScript",slug:"/snippets/JavaScript/enumArray",permalink:"/website/docs/snippets/JavaScript/enumArray",draft:!1,tags:[],version:"current",lastUpdatedAt:1688959469,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{nav:{title:"\u4ee3\u7801\u7247\u6bb5",order:1},group:{title:"\u5b9e\u7528\u7c7b\u5c01\u88c5",order:1},toc:"content",tocDepth:3},sidebar:"snippetsSidebar",next:{title:"request \u5c01\u88c5",permalink:"/website/docs/snippets/JavaScript/request"}},o={},m=[],b={toc:m},d="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u679a\u4e3e\u7c7b"},"\u679a\u4e3e\u7c7b"),(0,r.kt)("p",null,"\u4f7f\u7528\u6570\u7ec4\u5c06\u679a\u4e3e\u72b6\u6001\u4fe1\u606f\u4fdd\u5b58\u8d77\u6765\nlabel \u662f\u4e2d\u6587\u503c\uff0cvalue \u662f\u540e\u7aef\u4fdd\u5b58\u548c\u5b9e\u9645\u4f7f\u7528\u7684\u503c"),(0,r.kt)(l.Z,{language:"ts",mdxType:"CodeBlock"},s))}y.isMDXComponent=!0}}]);