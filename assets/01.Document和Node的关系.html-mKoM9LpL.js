import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as l,b as s}from"./app-C2vlW3dk.js";const n={},t=s(`<p>在Dom(文档对象模型)中，Document和Node是两个重要的概念，它们之间存在一定的关系。</p><ol><li><p>Node是一个<strong>基础类型</strong></p><ul><li>在Dom中，Node是所有节点类型的<strong>基类</strong>，表示文档树的基本单元。</li><li>Nod有多种具体类型，例如： <ul><li>Element：表示HTML元素节点(如div)。</li><li>Text：表示文本节点(如元素中的文字)。</li><li>Comment：表示注释节点。</li><li>Document：表示整个文档。</li><li>DocumentFragment：表示文档片段。</li></ul></li></ul></li><li><p>Document<strong>是一种特殊的Node</strong></p><ul><li>Document是整个文档给的根节点，它是Node的实列，同时也是Document类型的实例。</li><li>它继承了Node的属性和方法，并扩展了很多专属于Document的功能。</li></ul></li><li><p><strong>继承关系</strong></p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">EventTarget</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">   ↑</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Node</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">   ↑</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Document</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">   ↑</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">HTMLDocument</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">或其他具体的文档类型</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">，</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">如</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> XMLDocument</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>共同点</strong></p><ul><li><p>属性和方法继承：</p><p>由于Document继承自Node,Doucment可以使用很多Node通用的属性和方法，例如：</p><ul><li>nodeType：返回 节点类型，document.nodeType的值为9（即Node.Document_Node）</li><li>nodeName：返回节点名称，document.nodeType的值为#document</li><li>childNodes：返回子子节点的集合。</li><li>parentNode：<strong>document.parentNode通常为null，因为它是根节点</strong>。</li><li>appendChild()、remoteChild()等方法。</li></ul></li></ul></li><li><p>documen<strong>的特性</strong></p><p>document除了继承自Node的方法外，还有一些自身独有的功能，例如：</p><ul><li>访问文档结构： <ul><li>document.documentElement：返回文档的根元素(如html标签元素)</li><li>document.body返回文档的body元素</li></ul></li><li>查找节点： <ul><li>document.getElementById()、document.querySelector、document.querySelectorAll()等</li></ul></li><li>操作内容： <ul><li>document.createElement()：创建心元素节点.。</li><li>document.createTExtNdoe()：创建新文本节点。</li></ul></li></ul></li><li><p><strong>小结</strong>：</p><ul><li>关系：document是Node的实例，继承了Node的所有属性和方法，同时扩展了 许多与文档操作相关的功能。</li><li>区别：Node是一个通用的抽象概念，document是具体的实现，专门用于表示整个文档给的根节点。</li></ul></li></ol>`,2),o=[t];function a(d,c){return l(),e("div",null,o)}const p=i(n,[["render",a],["__file","01.Document和Node的关系.html.vue"]]),u=JSON.parse('{"path":"/js/Dom/01.Document%E5%92%8CNode%E7%9A%84%E5%85%B3%E7%B3%BB.html","title":"01.Document和Node的关系","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"01.Document和Node的关系","description":"01.Document和Node的关系"},"headers":[],"git":{"createdTime":1732462121000,"updatedTime":1732462121000,"contributors":[{"name":"liznlin","email":"3215144676@qq.com","commits":1}]},"readingTime":{"minutes":1.57,"words":471},"filePathRelative":"js/Dom/01.Document和Node的关系.md","localizedDate":"2024年11月24日"}');export{p as comp,u as data};
