import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as n}from"./app-C2vlW3dk.js";const h={},k=n(`<h3 id="_1-复制到剪贴板功能" tabindex="-1"><a class="header-anchor" href="#_1-复制到剪贴板功能"><span>1.复制到剪贴板功能</span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> *  param {String} text 需要复制的文本</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> *  param {Function} callback 回调函数</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> copyToClipboard</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">callback</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> input</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> document</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;textarea&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">  input</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">position</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;fixed&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">  input</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">opacity</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">  input</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> text</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">  document</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">  input</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">  document</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">execCommand</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;Copy&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">  document</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">removeChild</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  callback</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> callback</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> input</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">position</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;fixed&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">将该元素定位为</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> fixed</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">，</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">意味着它将不随页面滚动而移动</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  这样做的原因是为了避免它影响页面的正常布局</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> input</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">opacity</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">将</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> textarea</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> 的透明度设为</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">，</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">使它不可见</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> 将这个不可见的</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> textarea</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> 元素添加到页面的</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> body</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> 中</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">。</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">我们需要将元素添加到页面中才能</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  使用</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> document</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">execCommand</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> 方法进行文本操作</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">。 </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> input</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">方法会选中</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> textarea</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> 元素中的文本</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  这是复制操作的必要步骤</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">，</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">确保文本已经被选中</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">，</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">才能执行复制</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> document</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">execCommand</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;Copy&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">方法会将选中的文本复制到剪贴板</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  这是浏览器提供的一个通用方法</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">，</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">用于执行剪切</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">、</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">复制</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">、</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">粘贴等命令</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">。 </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> 复制完成后</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">，</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">立即将</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> textarea</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> 从文档中移除</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">。</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">这样做的原因是</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">，</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">这个元素只是临时用来复制文本的</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">，</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">不需要保留在页面中</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[k];function t(p,e){return a(),s("div",null,l)}const B=i(h,[["render",t],["__file","02.copyFn.html.vue"]]),E=JSON.parse('{"path":"/js/base/02.copyFn.html","title":"02.实现Copy功能","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"02.实现Copy功能","description":"实现Copy功能"},"headers":[{"level":3,"title":"1.复制到剪贴板功能","slug":"_1-复制到剪贴板功能","link":"#_1-复制到剪贴板功能","children":[]}],"git":{"createdTime":1726282512000,"updatedTime":1731211085000,"contributors":[{"name":"liznlin","email":"3215144676@qq.com","commits":1}]},"readingTime":{"minutes":1.01,"words":303},"filePathRelative":"js/base/02.copyFn.md","localizedDate":"2024年9月14日"}');export{B as comp,E as data};