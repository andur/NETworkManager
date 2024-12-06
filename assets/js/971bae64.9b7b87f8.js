"use strict";(self.webpackChunknetworkmanager=self.webpackChunknetworkmanager||[]).push([[446],{2972:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>r,toc:()=>t});const r=JSON.parse('{"id":"application/dns-lookup","title":"DNS Lookup","description":"With the DNS Lookup you can query DNS servers for various resource records.","source":"@site/docs/application/dns-lookup.md","sourceDirName":"application","slug":"/application/dns-lookup","permalink":"/NETworkManager/docs/application/dns-lookup","draft":false,"unlisted":false,"editUrl":"https://github.com/bornToBeRoot/NETworkManager/tree/main/Website/docs/application/dns-lookup.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"docsSidebar","previous":{"title":"Traceroute","permalink":"/NETworkManager/docs/application/traceroute"},"next":{"title":"Remote Desktop","permalink":"/NETworkManager/docs/application/remote-desktop"}}');var d=s(4848),i=s(8453);const o={sidebar_position:7},l="DNS Lookup",c={},t=[{value:"Profile",id:"profile",level:2},{value:"Inherit host from general",id:"inherit-host-from-general",level:3},{value:"Host",id:"host",level:3},{value:"Settings",id:"settings",level:2},{value:"DNS server",id:"dns-server",level:3},{value:"Add DNS suffix (primary) to hostname",id:"add-dns-suffix-primary-to-hostname",level:3},{value:"Use custom DNS suffix",id:"use-custom-dns-suffix",level:3},{value:"Recursion",id:"recursion",level:3},{value:"Use cache",id:"use-cache",level:3},{value:"Query class",id:"query-class",level:3},{value:"Show only most common query types",id:"show-only-most-common-query-types",level:3},{value:"Use only TCP",id:"use-only-tcp",level:3},{value:"Retries",id:"retries",level:3},{value:"Timeout (s)",id:"timeout-s",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"dns-lookup",children:"DNS Lookup"})}),"\n",(0,d.jsxs)(n.p,{children:["With the ",(0,d.jsx)(n.strong,{children:"DNS Lookup"})," you can query DNS servers for various resource records."]}),"\n",(0,d.jsx)(n.p,{children:"Example inputs:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"server-01.borntoberoot.net"})," (",(0,d.jsx)(n.code,{children:"A"})," record)"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"10.0.0.1"})," (",(0,d.jsx)(n.code,{children:"PTR"})," record)"]}),"\n"]}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsxs)(n.p,{children:["Multiple inputs can be combined with a semicolon (",(0,d.jsx)(n.code,{children:";"}),")."]}),(0,d.jsxs)(n.p,{children:["Example: ",(0,d.jsx)(n.code,{children:"server-01.borntoberoot.net; 10.0.0.1"})]})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"DNS Lookup",src:s(8898).A+"",width:"1200",height:"800"})}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsx)(n.p,{children:"Right-click on the result to copy or export the information."})}),"\n",(0,d.jsx)(n.h2,{id:"profile",children:"Profile"}),"\n",(0,d.jsx)(n.h3,{id:"inherit-host-from-general",children:"Inherit host from general"}),"\n",(0,d.jsx)(n.p,{children:"Inherit the host from the general settings."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"Enabled"})]}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsxs)(n.p,{children:["If this option is enabled, the ",(0,d.jsx)(n.a,{href:"#host",children:"Host"})," is overwritten by the host from the general settings and the ",(0,d.jsx)(n.a,{href:"#host",children:"Host"})," is disabled."]})}),"\n",(0,d.jsx)(n.h3,{id:"host",children:"Host"}),"\n",(0,d.jsx)(n.p,{children:"Hostname or IP address (or any other resource record) to query."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"String"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"Empty"})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Example:"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"server-01.borntoberoot.net"})," (",(0,d.jsx)(n.code,{children:"A"})," record)"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"1.1.1.1"})," (",(0,d.jsx)(n.code,{children:"PTR"})," record)"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"settings",children:"Settings"}),"\n",(0,d.jsx)(n.h3,{id:"dns-server",children:"DNS server"}),"\n",(0,d.jsx)(n.p,{children:"List of DNS server profiles. A profile can contain one or more DNS servers with IP address and port."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"List<NETworkManager.Models.Network.DNSServerConnectionInfoProfile>"})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Default:"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Server 1"}),(0,d.jsx)(n.th,{children:"Server 2"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Cloudflare"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"1.1.1.1:53"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"1.0.0.1:53"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"DNS.Watch"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"84.200.69.80:53"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"84.200.70.40:53"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Google Public DNS"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"8.8.8.8:53"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"8.8.4.4:53"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Level3"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"209.244.0.3:53"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"209.244.0.4:53"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Verisign"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"64.6.64.6:53"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"64.6.65.6:53"})})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"add-dns-suffix-primary-to-hostname",children:"Add DNS suffix (primary) to hostname"}),"\n",(0,d.jsx)(n.p,{children:"Add the primary DNS suffix to the hostname."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"Enabled"})]}),"\n",(0,d.jsx)(n.h3,{id:"use-custom-dns-suffix",children:"Use custom DNS suffix"}),"\n",(0,d.jsx)(n.p,{children:"Add a custom DNS suffix to the hostname."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"Boolean | String"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"Disabled | Empty"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Example:"})," ",(0,d.jsx)(n.code,{children:"Enabled | borntoberoot.net"})]}),"\n",(0,d.jsx)(n.h3,{id:"recursion",children:"Recursion"}),"\n",(0,d.jsx)(n.p,{children:"Use recursion for the dns query."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"Enabled"})]}),"\n",(0,d.jsx)(n.h3,{id:"use-cache",children:"Use cache"}),"\n",(0,d.jsx)(n.p,{children:"Use the cache for the dns query."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"Disabled"})]}),"\n",(0,d.jsx)(n.h3,{id:"query-class",children:"Query class"}),"\n",(0,d.jsx)(n.p,{children:"DNS class to use for the query."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"String"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"IN"})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Possible values:"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"CS"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"CH"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"HS"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"IN"})}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"show-only-most-common-query-types",children:"Show only most common query types"}),"\n",(0,d.jsxs)(n.p,{children:["Only show the most common query types (",(0,d.jsx)(n.code,{children:"A"}),", ",(0,d.jsx)(n.code,{children:"AAAA"}),", ",(0,d.jsx)(n.code,{children:"ANY"}),", ",(0,d.jsx)(n.code,{children:"CNAME"}),", ",(0,d.jsx)(n.code,{children:"MX"}),", ",(0,d.jsx)(n.code,{children:"NS"}),", ",(0,d.jsx)(n.code,{children:"PTR"}),", ",(0,d.jsx)(n.code,{children:"SOA"})," and ",(0,d.jsx)(n.code,{children:"TXT"}),") in the dropdown menu in the view. Otherwise all available query types are shown."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"Enabled"})]}),"\n",(0,d.jsx)(n.h3,{id:"use-only-tcp",children:"Use only TCP"}),"\n",(0,d.jsx)(n.p,{children:"Only use TCP for the dns query. DNS uses UDP by default."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"Disabled"})]}),"\n",(0,d.jsx)(n.h3,{id:"retries",children:"Retries"}),"\n",(0,d.jsx)(n.p,{children:"Retries for the dns query after which the query is considered lost."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"Integer"})," [Min ",(0,d.jsx)(n.code,{children:"1"}),", Max ",(0,d.jsx)(n.code,{children:"10"}),"]"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"3"})]}),"\n",(0,d.jsx)(n.h3,{id:"timeout-s",children:"Timeout (s)"}),"\n",(0,d.jsx)(n.p,{children:"Timeout in seconds for the dns query after which the query is considered lost."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"Integer"})," [Min ",(0,d.jsx)(n.code,{children:"1"}),", Max ",(0,d.jsx)(n.code,{children:"15"}),"]"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"2"})]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},8898:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/dns-lookup-b2f5f9effd6109b2563e7f7d883de41d.png"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(6540);const d={},i=r.createContext(d);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);