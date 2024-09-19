import{_ as s,c as a,o as i,a3 as t}from"./chunks/framework.BbeggeaM.js";const g=JSON.parse('{"title":"快速开始","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"zh/start.md","filePath":"zh/start.md"}'),e={name:"zh/start.md"},n=t(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><h2 id="安装-启动" tabindex="-1">安装 &amp; 启动 <a class="header-anchor" href="#安装-启动" aria-label="Permalink to &quot;安装 &amp; 启动&quot;">​</a></h2><ul><li>添加soon-mock至项目的 dev dependencies</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> soon-mock</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span></span></code></pre></div><ul><li>添加一个script 至 <code>package.json</code> , <code>-p</code> 可以配置 端口</li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;mock&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;soon-mock -p 8080&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li>启动 soon-mock 服务</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mock</span></span></code></pre></div><ul><li>当服务启动后, 可在浏览器中访问网址 <code>http://localhost:8080</code></li></ul><h2 id="添加-api" tabindex="-1">添加 API <a class="header-anchor" href="#添加-api" aria-label="Permalink to &quot;添加 API&quot;">​</a></h2><p>请阅读下一节 <code>Quick</code> 进行操作 .</p>`,11),l=[n];function p(h,o,d,c,r,k){return i(),a("div",null,l)}const _=s(e,[["render",p]]);export{g as __pageData,_ as default};
