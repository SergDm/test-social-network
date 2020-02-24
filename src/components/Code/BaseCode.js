import React from 'react'

const baseCode = [
    {
        id: 1,
        title: 'Insertion Sort',
        href: 'https://repl.it/@SergDm/Insertion-Sort-JS',
        code: <div className="javascript"><ol><li className="li1"><div className="de1"><span className="kw2">const</span> insert <span className="sy0">=</span> <span className="br0">&#40;</span>arr<span className="br0">&#41;</span> <span className="sy0">=&gt;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="kw1">for</span> <span className="br0">&#40;</span>let top <span className="sy0">=</span> <span className="nu0">1</span><span className="sy0">;</span> top <span className="sy0">&lt;</span> arr.<span className="me1">length</span><span className="sy0">;</span> top <span className="sy0">+=</span> <span className="nu0">1</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; let k <span className="sy0">=</span> top</div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="kw1">while</span> <span className="br0">&#40;</span>k <span className="sy0">&gt;</span> <span className="nu0">0</span> <span className="sy0">&amp;&amp;</span> arr<span className="br0">&#91;</span>k <span className="sy0">-</span> <span className="nu0">1</span><span className="br0">&#93;</span> <span className="sy0">&gt;</span> arr<span className="br0">&#91;</span>k<span className="br0">&#93;</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; &nbsp; &nbsp; <span className="br0">&#91;</span>arr<span className="br0">&#91;</span>k<span className="br0">&#93;</span><span className="sy0">,</span> arr<span className="br0">&#91;</span>k <span className="sy0">-</span> <span className="nu0">1</span><span className="br0">&#93;</span><span className="br0">&#93;</span> <span className="sy0">=</span> <span className="br0">&#91;</span>arr<span className="br0">&#91;</span>k <span className="sy0">-</span> <span className="nu0">1</span><span className="br0">&#93;</span><span className="sy0">,</span> arr<span className="br0">&#91;</span>k<span className="br0">&#93;</span><span className="br0">&#93;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; k <span className="sy0">-=</span> <span className="nu0">1</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="br0">&#125;</span> <span className="kw1">return</span> arr</div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="br0">&#125;</span><span className="sy0">;</span></div></li>
            <li className="li2"><div className="de2"><span className="kw2">const</span> arrTest <span className="sy0">=</span> <span className="br0">&#91;</span><span className="nu0">2</span><span className="sy0">,</span> <span className="nu0">4</span><span className="sy0">,</span> <span className="nu0">1</span><span className="sy0">,</span> <span className="nu0">5</span><span className="sy0">,</span> <span className="nu0">3</span><span className="br0">&#93;</span></div></li>
            <li className="li1"><div className="de1">insert<span className="br0">&#40;</span>arrTest<span className="br0">&#41;</span></div></li>
        </ol></div>
    },
    {
        id: 7,
        title: 'Euclidean Algorithm',
        href: 'https://repl.it/@SergDm/Euclidean-algorithm',
        code: <div className="javascript"><ol><li className="li1"><div className="de1"><span className="kw2">const</span> gcd <span className="sy0">=</span> <span className="br0">&#40;</span>a<span className="sy0">,</span> b<span className="br0">&#41;</span> <span className="sy0">=&gt;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="kw1">if</span> <span className="br0">&#40;</span>a <span className="sy0">===</span> b<span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="kw1">return</span> a</div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="br0">&#125;</span> <span className="kw1">else</span> <span className="kw1">if</span> <span className="br0">&#40;</span>a <span className="sy0">&gt;</span> b<span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; &nbsp; &nbsp; <span className="kw1">return</span> gcd<span className="br0">&#40;</span>a <span className="sy0">-</span> b<span className="sy0">,</span> b<span className="br0">&#41;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; <span className="br0">&#125;</span> <span className="kw1">else</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; &nbsp; <span className="kw1">return</span> gcd<span className="br0">&#40;</span>a<span className="sy0">,</span> b<span className="sy0">-</span>a<span className="br0">&#41;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; &nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li1"><div className="de1"><span className="br0">&#125;</span></div></li>
            <li className="li2"><div className="de2">&nbsp;</div></li>
            <li className="li1"><div className="de1"><span className="kw2">const</span> gcd2 <span className="sy0">=</span> <span className="br0">&#40;</span>a<span className="sy0">,</span> b<span className="br0">&#41;</span> <span className="sy0">=&gt;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="kw1">if</span> <span className="br0">&#40;</span>b <span className="sy0">===</span> <span className="nu0">0</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="kw1">return</span> a<span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="br0">&#125;</span> <span className="kw1">else</span> <span className="br0">&#123;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; &nbsp; <span className="kw1">return</span> gcd2<span className="br0">&#40;</span>b<span className="sy0">,</span> a <span className="sy0">%</span> b<span className="br0">&#41;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li1"><div className="de1"><span className="br0">&#125;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; </div></li>
            <li className="li1"><div className="de1"><span className="kw2">const</span> gcd3 <span className="sy0">=</span> <span className="br0">&#40;</span>a<span className="sy0">,</span> b<span className="br0">&#41;</span> <span className="sy0">=&gt;</span> <span className="br0">&#40;</span>b <span className="sy0">===</span> <span className="nu0">0</span><span className="br0">&#41;</span> <span className="sy0">?</span> a <span className="sy0">:</span> gcd3<span className="br0">&#40;</span>b<span className="sy0">,</span> a <span className="sy0">%</span> b<span className="br0">&#41;</span></div></li>
            <li className="li2"><div className="de2">&nbsp;</div></li>
            <li className="li1"><div className="de1">console.<span className="me1">log</span><span className="br0">&#40;</span>gcd<span className="br0">&#40;</span><span className="nu0">120</span><span className="sy0">,</span><span className="nu0">6</span><span className="br0">&#41;</span><span className="br0">&#41;</span></div></li>
            <li className="li1"><div className="de1">console.<span className="me1">log</span><span className="br0">&#40;</span>gcd2<span className="br0">&#40;</span><span className="nu0">40</span><span className="sy0">,</span><span className="nu0">8</span><span className="br0">&#41;</span><span className="br0">&#41;</span></div></li>
            <li className="li1"><div className="de1">console.<span className="me1">log</span><span className="br0">&#40;</span>gcd3<span className="br0">&#40;</span><span className="nu0">100</span><span className="sy0">,</span><span className="nu0">6</span><span className="br0">&#41;</span><span className="br0">&#41;</span></div></li>
        </ol></div>
    },
    {
        id: 2,
        title: 'Bubble sort',
        href: 'https://repl.it/@SergDm/Bubble-sort',
        code: <div className="javascript"><ol><li className="li1"><div className="de1"><span className="kw2">const</span> bubbleSort <span className="sy0">=</span> <span className="br0">&#40;</span>arr<span className="br0">&#41;</span> <span className="sy0">=&gt;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="kw1">for</span> <span className="br0">&#40;</span>let bypass <span className="sy0">=</span> <span className="nu0">1</span><span className="sy0">;</span> bypass <span className="sy0">&lt;</span> arr.<span className="me1">length</span><span className="sy0">;</span> bypass <span className="sy0">+=</span> <span className="nu0">1</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="kw1">for</span> <span className="br0">&#40;</span>let k <span className="sy0">=</span> <span className="nu0">0</span><span className="sy0">;</span> k <span className="sy0">&lt;</span> arr.<span className="me1">length</span> <span className="sy0">-</span> bypass<span className="sy0">;</span> k <span className="sy0">+=</span> <span className="nu0">1</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; <span className="kw1">if</span> <span className="br0">&#40;</span>arr<span className="br0">&#91;</span>k<span className="br0">&#93;</span> <span className="sy0">&gt;</span> arr<span className="br0">&#91;</span>k <span className="sy0">+</span> <span className="nu0">1</span><span className="br0">&#93;</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="br0">&#91;</span>arr<span className="br0">&#91;</span>k<span className="br0">&#93;</span><span className="sy0">,</span> arr<span className="br0">&#91;</span>k <span className="sy0"></span> + <span className="nu0">1</span><span className="br0">&#93;</span><span className="br0">&#93;</span> <span className="sy0">=</span> <span className="br0">&#91;</span>arr<span className="br0">&#91;</span>k <span className="sy0"></span> + <span className="nu0">1</span><span className="br0">&#93;</span><span className="sy0">,</span> arr<span className="br0">&#91;</span>k<span className="br0">&#93;</span><span className="br0">&#93;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; &nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="br0">&#125;</span> <span className="kw1">return</span> arr</div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="br0">&#125;</span><span className="sy0">;</span></div></li>
            <li className="li2"><div className="de2"><span className="kw2">const</span> arrTest <span className="sy0">=</span> <span className="br0">&#91;</span><span className="nu0">3</span><span className="sy0">,</span> <span className="nu0">2</span><span className="sy0">,</span> <span className="nu0">10</span><span className="sy0">,</span> <span className="sy0">-</span><span className="nu0">2</span><span className="sy0">,</span> <span className="nu0">0</span><span className="br0">&#93;</span></div></li>
            <li className="li1"><div className="de1">bubble<span className="br0">&#40;</span>arrTest<span className="br0">&#41;</span></div></li>
        </ol></div>
    },
    {
        id: 3,
        title: 'Sort by selection',
        href: 'https://repl.it/@SergDm/Selection-sort',
        code: <div className="javascript"><ol><li className="li1"><div className="de1"><span className="kw2">const</span> choise <span className="sy0">=</span> <span className="br0">&#40;</span>arr<span className="br0">&#41;</span> <span className="sy0">=&gt;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="kw1">for</span> <span className="br0">&#40;</span>let pos <span className="sy0">=</span> <span className="nu0">0</span><span className="sy0">;</span> pos <span className="sy0">&lt;</span> arr.<span className="me1">length</span> <span className="sy0">-</span> <span className="nu0">1</span><span className="sy0">;</span> pos <span className="sy0">+=</span> <span className="nu0">1</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="kw1">for</span> <span className="br0">&#40;</span>let k <span className="sy0">=</span> pos <span className="sy0">+</span> <span className="nu0">1</span><span className="sy0">;</span> k <span className="sy0">&lt;</span> arr.<span className="me1">length</span><span className="sy0">;</span> k <span className="sy0">+=</span> <span className="nu0">1</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; <span className="kw1">if</span> <span className="br0">&#40;</span>arr<span className="br0">&#91;</span>k<span className="br0">&#93;</span> <span className="sy0">&lt;</span> arr<span className="br0">&#91;</span>pos<span className="br0">&#93;</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="br0">&#91;</span>arr<span className="br0">&#91;</span>k<span className="br0">&#93;</span><span className="sy0">,</span> arr<span className="br0">&#91;</span>pos<span className="br0">&#93;</span><span className="br0">&#93;</span> <span className="sy0">=</span> <span className="br0">&#91;</span>arr<span className="br0">&#91;</span>pos<span className="br0">&#93;</span><span className="sy0">,</span> arr<span className="br0">&#91;</span>k<span className="br0">&#93;</span><span className="br0">&#93;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; &nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="br0">&#125;</span> <span className="kw1">return</span> arr</div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; </div></li>
            <li className="li1"><div className="de1"><span className="kw2">const</span> arrTest <span className="sy0">=</span> <span className="br0">&#91;</span><span className="nu0">3</span><span className="sy0">,</span> <span className="nu0">2</span><span className="sy0">,</span> <span className="nu0">1</span><span className="sy0">,</span> <span className="nu0">5</span><span className="sy0">,</span> <span className="nu0">4</span><span className="br0">&#93;</span></div></li>
            <li className="li1"><div className="de1">choise<span className="br0">&#40;</span>arrTest<span className="br0">&#41;</span></div></li>
        </ol></div>
    },
    {
        id: 4,
        title: 'Hoar Sort',
        href: 'https://repl.it/@SergDm/Sort-Hoar',
        code: <div className="javascript"><ol><li className="li1"><div className="de1"><span className="kw2">const</span> hoar_sort <span className="sy0">=</span> <span className="br0">&#40;</span>a<span className="br0">&#41;</span> <span className="sy0">=&gt;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="kw1">if</span> <span className="br0">&#40;</span>a.<span className="me1">length</span> <span className="sy0">&lt;=</span> <span className="nu0">1</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="kw1">return</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li2"><div className="de2">let barrier <span className="sy0">=</span> a<span className="br0">&#91;</span><span className="nu0">0</span><span className="br0">&#93;</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">let l <span className="sy0">=</span> <span className="br0">&#91;</span><span className="br0">&#93;</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">let r <span className="sy0">=</span> <span className="br0">&#91;</span><span className="br0">&#93;</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">let m <span className="sy0">=</span> <span className="br0">&#91;</span><span className="br0">&#93;</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; </div></li>
            <li className="li2"><div className="de2"><span className="kw1">for</span> <span className="br0">&#40;</span>let x of a<span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="kw1">if</span> <span className="br0">&#40;</span>x <span className="sy0">&lt;</span> barrier<span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; l.<span className="me1">push</span><span className="br0">&#40;</span>x<span className="br0">&#41;</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="br0">&#125;</span> <span className="kw1">else</span> <span className="kw1">if</span> <span className="br0">&#40;</span>x <span className="sy0">&gt;</span> barrier<span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; r.<span className="me1">push</span><span className="br0">&#40;</span>x<span className="br0">&#41;</span><span className="sy0">;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; <span className="br0">&#125;</span> <span className="kw1">else</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; m.<span className="me1">push</span><span className="br0">&#40;</span>x<span className="br0">&#41;</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li1"><div className="de1"><span className="br0">&#125;</span></div></li>
            <li className="li1"><div className="de1">hoar_sort<span className="br0">&#40;</span>l<span className="br0">&#41;</span><span className="sy0">;</span></div></li>
            <li className="li2"><div className="de2">hoar_sort<span className="br0">&#40;</span>r<span className="br0">&#41;</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">let k <span className="sy0">=</span> <span className="nu0">0</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1"><span className="kw1">for</span> <span className="br0">&#40;</span>let f of l.<span className="me1">concat</span><span className="br0">&#40;</span>m<span className="sy0">,</span> r<span className="br0">&#41;</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; &nbsp;a<span className="br0">&#91;</span>k<span className="br0">&#93;</span> <span className="sy0">=</span> f<span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; &nbsp;k <span className="sy0">+=</span> <span className="nu0">1</span><span className="sy0">;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; &nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="kw1">return</span> a<span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1"><span className="br0">&#125;</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">hoar_sort<span className="br0">&#40;</span><span className="br0">&#91;</span><span className="nu0">4</span><span className="sy0">,</span><span className="nu0">3</span><span className="sy0">,</span><span className="nu0">6</span><span className="sy0">,</span><span className="nu0">2</span><span className="sy0">,</span><span className="nu0">1</span><span className="sy0">,</span><span className="nu0">4</span><span className="sy0">,</span><span className="nu0">8</span><span className="sy0">,</span><span className="nu0">5</span><span className="sy0">,</span><span className="nu0">7</span><span className="br0">&#93;</span><span className="br0">&#41;</span><span className="sy0">;</span></div></li>
        </ol></div>
    },
    {
        id: 5,
        title: 'Sort two arrays',
        href: 'https://repl.it/@SergDm/Sort-2-array',
        code: <div className="javascript"><ol><li className="li1"><div className="de1"><span className="kw2">const</span> merge <span className="sy0">=</span> <span className="br0">&#40;</span>a<span className="sy0">,</span> b<span className="br0">&#41;</span> <span className="sy0">=&gt;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; let c <span className="sy0">=</span> <span className="br0">&#91;</span><span className="br0">&#93;</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; let i <span className="sy0">=</span> <span className="nu0">0</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; let k <span className="sy0">=</span> <span className="nu0">0</span><span className="sy0">;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; let n <span className="sy0">=</span> <span className="nu0">0</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="kw1">while</span> <span className="br0">&#40;</span> i <span className="sy0">&lt;</span> a.<span className="me1">length</span> <span className="sy0">&amp;&amp;</span> k <span className="sy0">&lt;</span> b.<span className="me1">length</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="kw1">if</span> <span className="br0">&#40;</span>a<span className="br0">&#91;</span>i<span className="br0">&#93;</span> <span className="sy0">&lt;=</span> b<span className="br0">&#91;</span>k<span className="br0">&#93;</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; c<span className="br0">&#91;</span>n<span className="br0">&#93;</span> <span className="sy0">=</span> a<span className="br0">&#91;</span>i<span className="br0">&#93;</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; i <span className="sy0">+=</span> <span className="nu0">1</span><span className="sy0">;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; &nbsp; &nbsp; n <span className="sy0">+=</span> <span className="nu0">1</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; <span className="br0">&#125;</span> <span className="kw1">else</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; &nbsp; c<span className="br0">&#91;</span>n<span className="br0">&#93;</span> <span className="sy0">=</span> b<span className="br0">&#91;</span>k<span className="br0">&#93;</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; &nbsp; k <span className="sy0">+=</span> <span className="nu0">1</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; &nbsp; n <span className="sy0">+=</span> <span className="nu0">1</span><span className="sy0">;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; &nbsp; &nbsp; &nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="br0">&#125;</span> <span className="kw1">while</span> <span className="br0">&#40;</span>i <span className="sy0">&lt;</span> a.<span className="me1">length</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; c<span className="br0">&#91;</span>n<span className="br0">&#93;</span> <span className="sy0">=</span> a<span className="br0">&#91;</span>i<span className="br0">&#93;</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; i <span className="sy0">+=</span> <span className="nu0">1</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; n <span className="sy0">+=</span> <span className="nu0">1</span><span className="sy0">;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; &nbsp; &nbsp; <span className="br0">&#125;</span> <span className="kw1">while</span> <span className="br0">&#40;</span>k <span className="sy0">&lt;</span> b.<span className="me1">length</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; c<span className="br0">&#91;</span>n<span className="br0">&#93;</span> <span className="sy0">=</span> b<span className="br0">&#91;</span>k<span className="br0">&#93;</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; k <span className="sy0">+=</span> <span className="nu0">1</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; n <span className="sy0">+=</span> <span className="nu0">1</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; <span className="br0">&#125;</span> <span className="kw1">return</span> c<span className="sy0">;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; <span className="br0">&#125;</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; </div></li>
            <li className="li1"><div className="de1">&nbsp; merge<span className="br0">&#40;</span><span className="br0">&#91;</span><span className="nu0">1</span><span className="sy0">,</span><span className="nu0">3</span><span className="sy0">,</span><span className="nu0">5</span><span className="sy0">,</span><span className="nu0">7</span><span className="sy0">,</span><span className="nu0">9</span><span className="br0">&#93;</span><span className="sy0">,</span> <span className="br0">&#91;</span><span className="nu0">2</span><span className="sy0">,</span><span className="nu0">4</span><span className="sy0">,</span><span className="nu0">6</span><span className="sy0">,</span><span className="nu0">8</span><span className="br0">&#93;</span><span className="br0">&#41;</span><span className="sy0">;</span></div></li>
        </ol></div>
    },
    {
        id: 6,
        title: 'Checking array sorting',
        href: 'https://repl.it/@SergDm/CheckSort',
        code: <div className="javascript"><ol><li className="li1"><div className="de1"><span className="kw2">const</span> check_sort <span className="sy0">=</span> <span className="br0">&#40;</span>a<span className="sy0">,</span> ascending<span className="br0">&#41;</span> <span className="sy0">=&gt;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">let flag <span className="sy0">=</span> <span className="kw2">true</span></div></li>
            <li className="li1"><div className="de1">let s <span className="sy0">=</span> <span className="nu0">2</span> <span className="sy0">*</span> Number<span className="br0">&#40;</span>ascending<span className="br0">&#41;</span> <span className="sy0">-</span> <span className="nu0">1</span></div></li>
            <li className="li1"><div className="de1"><span className="kw1">for</span> <span className="br0">&#40;</span>let i <span className="sy0">=</span> <span className="nu0">0</span><span className="sy0">;</span> i <span className="sy0">&lt;</span> a.<span className="me1">length</span><span className="sy0">;</span> i <span className="sy0">+=</span><span className="nu0">1</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; <span className="kw1">if</span> <span className="br0">&#40;</span>s <span className="sy0">*</span> a<span className="br0">&#91;</span>i<span className="br0">&#93;</span> <span className="sy0">&gt;</span> s <span className="sy0">*</span> a<span className="br0">&#91;</span>i <span className="sy0">+</span> <span className="nu0">1</span><span className="br0">&#93;</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; flag <span className="sy0">=</span> <span className="kw2">false</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="kw1">break</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="br0">&#125;</span> <span className="kw1">return</span> flag</div></li>
            <li className="li2"><div className="de2"><span className="br0">&#125;</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp;</div></li>
            <li className="li1"><div className="de1">check_sort<span className="br0">&#40;</span><span className="br0">&#91;</span><span className="nu0">17</span><span className="sy0">,</span><span className="nu0">15</span><span className="sy0">,</span><span className="nu0">13</span><span className="sy0">,</span><span className="nu0">11</span><span className="sy0">,</span><span className="nu0">9</span><span className="sy0">,</span><span className="nu0">7</span><span className="sy0">,</span><span className="nu0">5</span><span className="sy0">,</span><span className="nu0">2</span><span className="br0">&#93;</span><span className="sy0">,</span> <span className="kw2">false</span><span>*</span><span className="br0">&#41;</span></div></li>
        </ol><span>*(true в параметрах - по возрастанию, false - по убыванию)</span></div>

    },
    {
        id: 8,
        title: 'Binary search',
        href: 'https://repl.it/@SergDm/Binary-search',
        code: <div className="javascript"><ol><li className="li1"><div className="de1"><span className="kw2">const</span> left_bound <span className="sy0">=</span> <span className="br0">&#40;</span>arr<span className="sy0">,</span> key<span className="br0">&#41;</span> <span className="sy0">=&gt;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; let left <span className="sy0">=</span> <span className="sy0">-</span><span className="nu0">1</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; let right <span className="sy0">=</span> arr.<span className="me1">length</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="kw1">while</span> <span className="br0">&#40;</span><span className="br0">&#40;</span>right <span className="sy0">-</span> left<span className="br0">&#41;</span> <span className="sy0">&gt;</span> <span className="nu0">1</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; &nbsp; let middle <span className="sy0">=</span> <span className="br0">&#40;</span>left <span className="sy0">+</span> right<span className="br0">&#41;</span> <span className="sy0">/</span> <span className="nu0">2</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="kw1">if</span> <span className="br0">&#40;</span>arr<span className="br0">&#91;</span>middle<span className="br0">&#93;</span> <span className="sy0">&lt;</span> key<span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; left <span className="sy0">=</span> middle<span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="br0">&#125;</span> <span className="kw1">else</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; right <span className="sy0">=</span> middle<span className="sy0">;</span> &nbsp;</div></li>
            <li className="li2"><div className="de2">&nbsp; &nbsp; &nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="br0">&#125;</span> <span className="kw1">return</span> left<span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="br0">&#125;</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="kw2">const</span> right_bound <span className="sy0">=</span> <span className="br0">&#40;</span>arr<span className="sy0">,</span> key<span className="br0">&#41;</span> <span className="sy0">=&gt;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; let left <span className="sy0">=</span> <span className="sy0">-</span><span className="nu0">1</span><span className="sy0">;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; let right <span className="sy0">=</span> arr.<span className="me1">length</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="kw1">while</span> <span className="br0">&#40;</span>right <span className="sy0">-</span> left <span className="sy0">&gt;</span> <span className="nu0">1</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; let middle <span className="sy0">=</span> <span className="br0">&#40;</span>left <span className="sy0">+</span> right<span className="br0">&#41;</span> <span className="sy0">/</span> <span className="nu0">2</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="kw1">if</span> <span className="br0">&#40;</span>arr<span className="br0">&#91;</span>middle<span className="br0">&#93;</span> <span className="sy0">&lt;=</span> key<span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; left <span className="sy0">=</span> middle<span className="sy0">;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; &nbsp; <span className="br0">&#125;</span> <span className="kw1">else</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; right <span className="sy0">=</span> middle<span className="sy0">;</span> &nbsp;</div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="br0">&#125;</span> <span className="kw1">return</span> right<span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="br0">&#125;</span><span className="sy0">;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; </div></li>
            <li className="li1"><div className="de1">left_bound<span className="br0">&#40;</span><span className="br0">&#91;</span><span className="nu0">1</span><span className="sy0">,</span> <span className="nu0">3</span><span className="sy0">,</span> <span className="nu0">3</span><span className="sy0">,</span> <span className="nu0">6</span><span className="sy0">,</span> <span className="nu0">6</span><span className="sy0">,</span> <span className="nu0">7</span><span className="sy0">,</span> <span className="nu0">8</span><span className="br0">&#93;</span><span className="sy0">,</span> <span className="nu0">6</span><span className="br0">&#41;</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">right_bound<span className="br0">&#40;</span><span className="br0">&#91;</span><span className="nu0">1</span><span className="sy0">,</span> <span className="nu0">3</span><span className="sy0">,</span> <span className="nu0">3</span><span className="sy0">,</span> <span className="nu0">6</span><span className="sy0">,</span> <span className="nu0">6</span><span className="sy0">,</span> <span className="nu0">7</span><span className="sy0">,</span> <span className="nu0">8</span><span className="br0">&#93;</span><span className="sy0">,</span> <span className="nu0">6</span><span className="br0">&#41;</span><span className="sy0">;</span></div></li>
        </ol></div>
    },
    {
        id: 9,
        title: 'Tower of hanoi',
        href: 'https://repl.it/@SergDm/Tower-of-hanoi',
        code: <div className="javascript"><ol><li className="li1"><div className="de1"><span className="kw2">const</span> hanoi <span className="sy0">=</span> <span className="br0">&#40;</span>n<span className="sy0">,</span> i<span className="sy0">,</span> k<span className="br0">&#41;</span> <span className="sy0">=&gt;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="kw1">if</span> <span className="br0">&#40;</span>n <span className="sy0">===</span> <span className="nu0">1</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; console.<span className="me1">log</span><span className="br0">&#40;</span>`<span className="st0">'Move disk'</span> $<span className="br0">&#123;</span>n<span className="br0">&#125;</span> from pin $<span className="br0">&#123;</span>i<span className="br0">&#125;</span> to $<span className="br0">&#123;</span>k<span className="br0">&#125;</span>`<span className="br0">&#41;</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="br0">&#125;</span> <span className="kw1">else</span> <span className="br0">&#123;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; &nbsp; &nbsp; let tmp <span className="sy0">=</span> <span className="nu0">6</span> <span className="sy0">-</span> i <span className="sy0">-</span> k<span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; hanoi<span className="br0">&#40;</span>n <span className="sy0">-</span> <span className="nu0">1</span><span className="sy0">,</span> i<span className="sy0">,</span> tmp<span className="br0">&#41;</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; console.<span className="me1">log</span><span className="br0">&#40;</span>`<span className="st0">'Move disk'</span> $<span className="br0">&#123;</span>n<span className="br0">&#125;</span> from pin $<span className="br0">&#123;</span>i<span className="br0">&#125;</span> to $<span className="br0">&#123;</span>k<span className="br0">&#125;</span>`<span className="br0">&#41;</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; hanoi<span className="br0">&#40;</span>n <span className="sy0">-</span> <span className="nu0">1</span><span className="sy0">,</span> tmp<span className="sy0">,</span> k<span className="br0">&#41;</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; <span className="br0">&#125;</span><span className="sy0">;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; </div></li>
            <li className="li1"><div className="de1">&nbsp;hanoi<span className="br0">&#40;</span><span className="nu0">4</span><span className="sy0">,</span> <span className="nu0">1</span><span className="sy0">,</span> <span className="nu0">2</span><span className="br0">&#41;</span><span className="sy0">*;</span></div></li>
        </ol><span>*Переложить с первого на второй(i - с которой, k - на которую)</span></div>
    },
    {
        id: 10,
        title: 'Number generator',
        href: 'https://repl.it/@SergDm/Number-generator',
        code: <div className="javascript"><ol><li className="li1"><div className="de1"><span className="kw2">const</span> generate_num <span className="sy0">=</span> <span className="br0">&#40;</span>n<span className="sy0">,</span> m<span className="sy0">,</span> prefix<span className="br0">&#41;</span> <span className="sy0">=&gt;</span><span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="kw1">if</span> <span className="br0">&#40;</span>m <span className="sy0">===</span> <span className="nu0">0</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; console.<span className="me1">log</span><span className="br0">&#40;</span>prefix<span className="br0">&#41;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="kw1">return</span> prefix</div></li>
            <li className="li2"><div className="de2">&nbsp; &nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="kw1">for</span> <span className="br0">&#40;</span>let digit <span className="sy0">=</span> <span className="nu0">0</span><span className="sy0">;</span> digit <span className="sy0">&lt;</span> n<span className="sy0">;</span> digit <span className="sy0">+=</span> <span className="nu0">1</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; prefix.<span className="me1">push</span><span className="br0">&#40;</span>digit<span className="br0">&#41;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; generate_num<span className="br0">&#40;</span>n<span className="sy0">,</span> m <span className="sy0">-</span> <span className="nu0">1</span><span className="sy0">,</span> prefix<span className="br0">&#41;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; prefix.<span className="me1">pop</span><span className="br0">&#40;</span><span className="br0">&#41;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; &nbsp; &nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; </div></li>
            <li className="li1"><div className="de1">generate_num<span className="br0">&#40;</span><span className="nu0">4</span><span className="sy0">,</span><span className="nu0">3</span><span className="sy0">,</span><span className="br0">&#91;</span><span className="br0">&#93;</span><span className="br0">&#41;</span></div></li>
        </ol></div>
    },
    {
        id: 11,
        title: 'Permutation generator',
        href: 'https://repl.it/@SergDm/Permutation-generator',
        code: <div className="javascript"><ol><li className="li1"><div className="de1"><span className="kw2">const</span> generate_permutations <span className="sy0">=</span> <span className="br0">&#40;</span>n<span className="sy0">,</span> m <span className="sy0">=</span> n<span className="sy0">,</span> prefix <span className="sy0">=</span> <span className="br0">&#91;</span><span className="br0">&#93;</span><span className="br0">&#41;</span> <span className="sy0">=&gt;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="kw1">if</span> <span className="br0">&#40;</span>m <span className="sy0">===</span> <span className="nu0">0</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; console.<span className="me1">log</span><span className="br0">&#40;</span>prefix.<span className="me1">join</span><span className="br0">&#40;</span><span className="st0">' '</span><span className="br0">&#41;</span><span className="br0">&#41;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; &nbsp; <span className="kw1">for</span> <span className="br0">&#40;</span>let number <span className="sy0">=</span> <span className="nu0">1</span><span className="sy0">;</span> number <span className="sy0">&lt;</span> n <span className="sy0">+</span> <span className="nu0">1</span><span className="sy0">;</span> number <span className="sy0">+=</span> <span className="nu0">1</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; <span className="kw1">if</span> <span className="br0">&#40;</span>find<span className="br0">&#40;</span>number<span className="sy0">,</span> prefix<span className="br0">&#41;</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; &nbsp; <span className="kw1">continue</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; <span className="br0">&#125;</span> &nbsp;</div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; &nbsp; prefix.<span className="me1">push</span><span className="br0">&#40;</span>number<span className="br0">&#41;</span><span className="sy0">;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; &nbsp; &nbsp; &nbsp; generate_permutations<span className="br0">&#40;</span>n<span className="sy0">,</span> m <span className="sy0">-</span> <span className="nu0">1</span><span className="sy0">,</span> prefix<span className="br0">&#41;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; &nbsp; prefix.<span className="me1">pop</span><span className="br0">&#40;</span><span className="br0">&#41;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; </div></li>
            <li className="li2"><div className="de2">&nbsp; <span className="kw2">const</span> find <span className="sy0">=</span> <span className="br0">&#40;</span>number<span className="sy0">,</span> a<span className="br0">&#41;</span> <span className="sy0">=&gt;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; <span className="kw1">for</span> <span className="br0">&#40;</span><span className="kw2">const</span> x of a<span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; <span className="kw1">if</span> <span className="br0">&#40;</span>number <span className="sy0">===</span> x<span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; <span className="kw1">return</span> <span className="kw2">true</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; &nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; &nbsp; <span className="br0">&#125;</span> <span className="kw1">return</span> <span className="kw2">false</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; </div></li>
            <li className="li1"><div className="de1">generate_permutations<span className="br0">&#40;</span><span className="nu0">3</span><span className="br0">&#41;</span></div></li>
        </ol></div>
    },
    {
        id: 12,
        title: 'Fibonacci number search',
        href: 'https://repl.it/@SergDm/Fibonacci-number-search',
        code: <div className="javascript"><ol><li className="li1"><div className="de1"><span className="kw2">const</span> fib <span className="sy0">=</span> <span className="br0">&#40;</span>n<span className="br0">&#41;</span> <span className="sy0">=&gt;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; let fib <span className="sy0">=</span> <span className="br0">&#91;</span><span className="nu0">0</span><span className="sy0">,</span><span className="nu0">1</span><span className="br0">&#93;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="kw1">for</span> <span className="br0">&#40;</span>let i <span className="sy0">=</span> <span className="nu0">2</span><span className="sy0">;</span> i <span className="sy0">&lt;=</span> n<span className="sy0">;</span> i <span className="sy0">+=</span> <span className="nu0">1</span><span className="br0">&#41;</span> <span className="br0">&#123;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; &nbsp; fib<span className="br0">&#91;</span>i<span className="br0">&#93;</span> <span className="sy0">=</span> fib<span className="br0">&#91;</span>i <span className="sy0">-</span> <span className="nu0">1</span><span className="br0">&#93;</span> <span className="sy0">+</span> fib<span className="br0">&#91;</span>i <span className="sy0">-</span> <span className="nu0">2</span><span className="br0">&#93;</span></div></li>
            <li className="li2"><div className="de2">&nbsp; &nbsp; <span className="br0">&#125;</span> <span className="kw1">return</span> fib<span className="br0">&#91;</span>n<span className="br0">&#93;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; <span className="br0">&#125;</span></div></li>
            <li className="li1"><div className="de1">&nbsp; </div></li>
            <li className="li1"><div className="de1">fib<span className="br0">&#40;</span><span className="nu0">10</span><span className="br0">&#41;</span></div></li>
        </ol></div>
    },
    {
        id: 13,
        title: 'Fast exponentiation',
        href: 'https://repl.it/@SergDm/Fast-exponentiation',
        code: <div className="javascript"><ol><li className="li1"><div className="de1"><span className="kw2">const</span> pow <span className="sy0">=</span> <span className="br0">&#40;</span>a<span className="sy0">,</span> n<span className="br0">&#41;</span> <span className="sy0">=&gt;</span> n <span className="sy0">===</span> <span className="nu0">0</span> <span className="sy0">?</span> <span className="nu0">1</span> <span className="sy0">:</span> pow<span className="br0">&#40;</span>a<span className="sy0">,</span> n <span className="sy0">-</span> <span className="nu0">1</span><span className="br0">&#41;</span> <span className="sy0">*</span> a</div></li>
            <li className="li1"><div className="de1">&nbsp;</div></li>
            <li className="li1"><div className="de1"><span className="kw2">const</span> pow2 <span className="sy0">=</span> <span className="br0">&#40;</span>a<span className="sy0">,</span> n<span className="br0">&#41;</span> <span className="sy0">=&gt;</span> n <span className="sy0">===</span> <span className="nu0">0</span> </div></li>
            <li className="li1"><div className="de1"><span className="sy0">?</span> <span className="nu0">1</span> <span className="sy0">:</span> n <span className="sy0">%</span> <span className="nu0">2</span> <span className="sy0">===</span> <span className="nu0">1</span> <span className="sy0">?</span> pow<span className="br0">&#40;</span>a<span className="sy0">,</span> n <span className="sy0">-</span> <span className="nu0">1</span><span className="br0">&#41;</span> <span className="sy0">*</span> a <span className="sy0">:</span> pow<span className="br0">&#40;</span>a <span className="sy0">*</span> a<span className="sy0">,</span> n <span className="sy0">/</span> <span className="nu0">2</span><span className="br0">&#41;</span></div></li>
            <li className="li2"><div className="de2">&nbsp;</div></li>
            <li className="li1"><div className="de1">console.<span className="me1">log</span><span className="br0">&#40;</span>pow<span className="br0">&#40;</span><span className="nu0">8</span><span className="sy0">,</span><span className="nu0">5</span><span className="br0">&#41;</span><span className="br0">&#41;</span></div></li>
            <li className="li1"><div className="de1">console.<span className="me1">log</span><span className="br0">&#40;</span>pow2<span className="br0">&#40;</span><span className="nu0">8</span><span className="sy0">,</span><span className="nu0">3</span><span className="br0">&#41;</span><span className="br0">&#41;</span></div></li>
        </ol></div>
    },
    {
        id: 14,
        title: 'Timer',
        href: 'https://repl.it/@SergDm/Timer',
        code: <div class="javascript"><ol><li class="li1"><div class="de1"><span class="kw2">class</span> MyTimer <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; constructor<span class="br0">&#40;</span>t<span class="sy0">,</span> s <span class="sy0">=</span> <span class="nu0">0</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; <span class="kw1">this</span>.<span class="me1">time</span> <span class="sy0">=</span> t<span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; <span class="kw1">this</span>.<span class="kw3">stop</span> <span class="sy0">=</span> s<span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; tick<span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; <span class="kw1">this</span>.<span class="me1">time</span> <span class="sy0">-=</span> <span class="nu0">1</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; console.<span class="me1">log</span><span class="br0">&#40;</span><span class="kw1">this</span>.<span class="me1">time</span><span class="br0">&#41;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; run<span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; setInterval<span class="br0">&#40;</span><span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="sy0">=&gt;</span> <span class="br0">&#40;</span><span class="kw1">this</span>.<span class="me1">time</span> <span class="sy0">&lt;=</span> <span class="kw1">this</span>.<span class="kw3">stop</span><span class="br0">&#41;</span> </div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; <span class="sy0">?</span> clearInterval<span class="br0">&#40;</span><span class="kw1">this</span>.<span class="me1">run</span><span class="br0">&#41;</span> <span class="sy0">:</span> <span class="kw1">this</span>.<span class="me1">tick</span><span class="br0">&#40;</span><span class="br0">&#41;</span><span class="sy0">,</span> <span class="nu0">1000</span><span class="br0">&#41;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1"><span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1">&nbsp;</div></li>
            <li class="li1"><div class="de1">let timer <span class="sy0">=</span> <span class="kw2">new</span> MyTimer<span class="br0">&#40;</span><span class="nu0">10</span><span class="br0">&#41;</span></div></li>
            <li class="li1"><div class="de1">timer.<span class="me1">run</span><span class="br0">&#40;</span><span class="br0">&#41;</span></div></li>
        </ol></div>
    }
]

export default baseCode