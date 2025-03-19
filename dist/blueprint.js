var f=(u,n)=>{let t=u.split(".").map((i)=>Number(i)),g=n.split(".").map((i)=>Number(i));for(let i in t)if(t[i]>g[i])return-1;else if(g[i]>t[i])return 1;return 0};/*!
# code-editor

Information about the `<code-editor>` component blueprint.
*/var h="0.8.5",w="https://cdnjs.cloudflare.com/ajax/libs/ace/1.23.2/",z="ace/theme/tomorrow",G=async(u,n)=>{let{Component:t,elements:g,version:i}=n,{slot:j}=g,k=(r)=>{return new Promise((s)=>{let b=g.script({src:r});b.onload=()=>s(globalThis),document.head.append(b)})},{ace:m}=await k(`${w}ace.min.js`);if(f(h,i)<0)throw new Error(`blueprint requires xinjs ${h}`);class x extends t{source="";theme=z;mode="javascript";_options={};editor=null;constructor(){super();this.initAttributes("source","theme","mode")}static styleSpec={":host":{display:"block",minHeight:"100px"}};content=()=>j();connectedCallback(){if(super.connectedCallback(),!this.source)this.source=(this.innerHTML||"").trim()+`
`;this.editor=m.edit(this,{mode:`ace/mode/${this.mode}`,tabSize:2,useSoftTabs:!0,useWorker:!1,...this.options}),this.editor.setValue(this.source),this.editor.clearSelection(),this.editor.session.getUndoManager().reset()}role="textbox";render(){this.editor.setTheme(this.theme)}}return{type:x}},P=G;export{P as default,G as blueprint};

//# debugId=1CD001786AAC58AB64756E2164756E21
//# sourceMappingURL=blueprint.js.map
