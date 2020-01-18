import React from 'react'

const baseCode = [
    {
        id: 1,
        title: 'Сортировка вставками',
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
        title: 'Алгоритм Эвклида',
        href: 'https://repl.it/@SergDm/Euclidean-algorithm',
        code: <div class="javascript"><ol><li class="li1"><div class="de1"><span class="kw2">const</span> gcd <span class="sy0">=</span> <span class="br0">&#40;</span>a<span class="sy0">,</span> b<span class="br0">&#41;</span> <span class="sy0">=&gt;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>a <span class="sy0">===</span> b<span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw1">return</span> a</div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="br0">&#125;</span> <span class="kw1">else</span> <span class="kw1">if</span> <span class="br0">&#40;</span>a <span class="sy0">&gt;</span> b<span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; &nbsp; &nbsp; <span class="kw1">return</span> gcd<span class="br0">&#40;</span>a <span class="sy0">-</span> b<span class="sy0">,</span> b<span class="br0">&#41;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span> <span class="kw1">else</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; <span class="kw1">return</span> gcd<span class="br0">&#40;</span>a<span class="sy0">,</span> b<span class="sy0">-</span>a<span class="br0">&#41;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1"><span class="br0">&#125;</span></div></li>
            <li class="li2"><div class="de2">&nbsp;</div></li>
            <li class="li1"><div class="de1"><span class="kw2">const</span> gcd2 <span class="sy0">=</span> <span class="br0">&#40;</span>a<span class="sy0">,</span> b<span class="br0">&#41;</span> <span class="sy0">=&gt;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>b <span class="sy0">===</span> <span class="nu0">0</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw1">return</span> a<span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="br0">&#125;</span> <span class="kw1">else</span> <span class="br0">&#123;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; &nbsp; <span class="kw1">return</span> gcd2<span class="br0">&#40;</span>b<span class="sy0">,</span> a <span class="sy0">%</span> b<span class="br0">&#41;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1"><span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; </div></li>
            <li class="li1"><div class="de1"><span class="kw2">const</span> gcd3 <span class="sy0">=</span> <span class="br0">&#40;</span>a<span class="sy0">,</span> b<span class="br0">&#41;</span> <span class="sy0">=&gt;</span> <span class="br0">&#40;</span>b <span class="sy0">===</span> <span class="nu0">0</span><span class="br0">&#41;</span> <span class="sy0">?</span> a <span class="sy0">:</span> gcd3<span class="br0">&#40;</span>b<span class="sy0">,</span> a <span class="sy0">%</span> b<span class="br0">&#41;</span></div></li>
            <li class="li2"><div class="de2">&nbsp;</div></li>
            <li class="li1"><div class="de1">console.<span class="me1">log</span><span class="br0">&#40;</span>gcd<span class="br0">&#40;</span><span class="nu0">120</span><span class="sy0">,</span><span class="nu0">6</span><span class="br0">&#41;</span><span class="br0">&#41;</span></div></li>
            <li class="li1"><div class="de1">console.<span class="me1">log</span><span class="br0">&#40;</span>gcd2<span class="br0">&#40;</span><span class="nu0">40</span><span class="sy0">,</span><span class="nu0">8</span><span class="br0">&#41;</span><span class="br0">&#41;</span></div></li>
            <li class="li1"><div class="de1">console.<span class="me1">log</span><span class="br0">&#40;</span>gcd3<span class="br0">&#40;</span><span class="nu0">100</span><span class="sy0">,</span><span class="nu0">6</span><span class="br0">&#41;</span><span class="br0">&#41;</span></div></li>
        </ol></div>
    },
    {
        id: 2,
        title: 'Сортировка пузырьком',
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
        title: 'Сортировка выбором',
        href: 'https://repl.it/@SergDm/Selection-sort',
        code: <div class="javascript"><ol><li class="li1"><div class="de1"><span class="kw2">const</span> choise <span class="sy0">=</span> <span class="br0">&#40;</span>arr<span class="br0">&#41;</span> <span class="sy0">=&gt;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="kw1">for</span> <span class="br0">&#40;</span>let pos <span class="sy0">=</span> <span class="nu0">0</span><span class="sy0">;</span> pos <span class="sy0">&lt;</span> arr.<span class="me1">length</span> <span class="sy0">-</span> <span class="nu0">1</span><span class="sy0">;</span> pos <span class="sy0">+=</span> <span class="nu0">1</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw1">for</span> <span class="br0">&#40;</span>let k <span class="sy0">=</span> pos <span class="sy0">+</span> <span class="nu0">1</span><span class="sy0">;</span> k <span class="sy0">&lt;</span> arr.<span class="me1">length</span><span class="sy0">;</span> k <span class="sy0">+=</span> <span class="nu0">1</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>arr<span class="br0">&#91;</span>k<span class="br0">&#93;</span> <span class="sy0">&lt;</span> arr<span class="br0">&#91;</span>pos<span class="br0">&#93;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="br0">&#91;</span>arr<span class="br0">&#91;</span>k<span class="br0">&#93;</span><span class="sy0">,</span> arr<span class="br0">&#91;</span>pos<span class="br0">&#93;</span><span class="br0">&#93;</span> <span class="sy0">=</span> <span class="br0">&#91;</span>arr<span class="br0">&#91;</span>pos<span class="br0">&#93;</span><span class="sy0">,</span> arr<span class="br0">&#91;</span>k<span class="br0">&#93;</span><span class="br0">&#93;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="br0">&#125;</span> <span class="kw1">return</span> arr</div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; </div></li>
            <li class="li1"><div class="de1"><span class="kw2">const</span> arrTest <span class="sy0">=</span> <span class="br0">&#91;</span><span class="nu0">3</span><span class="sy0">,</span> <span class="nu0">2</span><span class="sy0">,</span> <span class="nu0">1</span><span class="sy0">,</span> <span class="nu0">5</span><span class="sy0">,</span> <span class="nu0">4</span><span class="br0">&#93;</span></div></li>
            <li class="li1"><div class="de1">choise<span class="br0">&#40;</span>arrTest<span class="br0">&#41;</span></div></li>
        </ol></div>
    },
    {
        id: 4,
        title: 'Сортировка Хоара',
        href: 'https://repl.it/@SergDm/Sort-Hoar',
        code: <div class="javascript"><ol><li class="li1"><div class="de1"><span class="kw2">const</span> hoar_sort <span class="sy0">=</span> <span class="br0">&#40;</span>a<span class="br0">&#41;</span> <span class="sy0">=&gt;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>a.<span class="me1">length</span> <span class="sy0">&lt;=</span> <span class="nu0">1</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw1">return</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li2"><div class="de2">let barrier <span class="sy0">=</span> a<span class="br0">&#91;</span><span class="nu0">0</span><span class="br0">&#93;</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">let l <span class="sy0">=</span> <span class="br0">&#91;</span><span class="br0">&#93;</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">let r <span class="sy0">=</span> <span class="br0">&#91;</span><span class="br0">&#93;</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">let m <span class="sy0">=</span> <span class="br0">&#91;</span><span class="br0">&#93;</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; </div></li>
            <li class="li2"><div class="de2"><span class="kw1">for</span> <span class="br0">&#40;</span>let x of a<span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>x <span class="sy0">&lt;</span> barrier<span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; l.<span class="me1">push</span><span class="br0">&#40;</span>x<span class="br0">&#41;</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="br0">&#125;</span> <span class="kw1">else</span> <span class="kw1">if</span> <span class="br0">&#40;</span>x <span class="sy0">&gt;</span> barrier<span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; r.<span class="me1">push</span><span class="br0">&#40;</span>x<span class="br0">&#41;</span><span class="sy0">;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; <span class="br0">&#125;</span> <span class="kw1">else</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; m.<span class="me1">push</span><span class="br0">&#40;</span>x<span class="br0">&#41;</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1"><span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1">hoar_sort<span class="br0">&#40;</span>l<span class="br0">&#41;</span><span class="sy0">;</span></div></li>
            <li class="li2"><div class="de2">hoar_sort<span class="br0">&#40;</span>r<span class="br0">&#41;</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">let k <span class="sy0">=</span> <span class="nu0">0</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1"><span class="kw1">for</span> <span class="br0">&#40;</span>let f of l.<span class="me1">concat</span><span class="br0">&#40;</span>m<span class="sy0">,</span> r<span class="br0">&#41;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp;a<span class="br0">&#91;</span>k<span class="br0">&#93;</span> <span class="sy0">=</span> f<span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp;k <span class="sy0">+=</span> <span class="nu0">1</span><span class="sy0">;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; &nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="kw1">return</span> a<span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1"><span class="br0">&#125;</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">hoar_sort<span class="br0">&#40;</span><span class="br0">&#91;</span><span class="nu0">4</span><span class="sy0">,</span><span class="nu0">3</span><span class="sy0">,</span><span class="nu0">6</span><span class="sy0">,</span><span class="nu0">2</span><span class="sy0">,</span><span class="nu0">1</span><span class="sy0">,</span><span class="nu0">4</span><span class="sy0">,</span><span class="nu0">8</span><span class="sy0">,</span><span class="nu0">5</span><span class="sy0">,</span><span class="nu0">7</span><span class="br0">&#93;</span><span class="br0">&#41;</span><span class="sy0">;</span></div></li>
        </ol></div>
    },
    {
        id: 5,
        title: 'Сортировка двух массивов',
        href: 'https://repl.it/@SergDm/Sort-2-array',
        code: <div class="javascript"><ol><li class="li1"><div class="de1"><span class="kw2">const</span> merge <span class="sy0">=</span> <span class="br0">&#40;</span>a<span class="sy0">,</span> b<span class="br0">&#41;</span> <span class="sy0">=&gt;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; let c <span class="sy0">=</span> <span class="br0">&#91;</span><span class="br0">&#93;</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; let i <span class="sy0">=</span> <span class="nu0">0</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; let k <span class="sy0">=</span> <span class="nu0">0</span><span class="sy0">;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; let n <span class="sy0">=</span> <span class="nu0">0</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="kw1">while</span> <span class="br0">&#40;</span> i <span class="sy0">&lt;</span> a.<span class="me1">length</span> <span class="sy0">&amp;&amp;</span> k <span class="sy0">&lt;</span> b.<span class="me1">length</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>a<span class="br0">&#91;</span>i<span class="br0">&#93;</span> <span class="sy0">&lt;=</span> b<span class="br0">&#91;</span>k<span class="br0">&#93;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; c<span class="br0">&#91;</span>n<span class="br0">&#93;</span> <span class="sy0">=</span> a<span class="br0">&#91;</span>i<span class="br0">&#93;</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; i <span class="sy0">+=</span> <span class="nu0">1</span><span class="sy0">;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; &nbsp; &nbsp; n <span class="sy0">+=</span> <span class="nu0">1</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span> <span class="kw1">else</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; c<span class="br0">&#91;</span>n<span class="br0">&#93;</span> <span class="sy0">=</span> b<span class="br0">&#91;</span>k<span class="br0">&#93;</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; k <span class="sy0">+=</span> <span class="nu0">1</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; n <span class="sy0">+=</span> <span class="nu0">1</span><span class="sy0">;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; &nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="br0">&#125;</span> <span class="kw1">while</span> <span class="br0">&#40;</span>i <span class="sy0">&lt;</span> a.<span class="me1">length</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; c<span class="br0">&#91;</span>n<span class="br0">&#93;</span> <span class="sy0">=</span> a<span class="br0">&#91;</span>i<span class="br0">&#93;</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; i <span class="sy0">+=</span> <span class="nu0">1</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; n <span class="sy0">+=</span> <span class="nu0">1</span><span class="sy0">;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span> <span class="kw1">while</span> <span class="br0">&#40;</span>k <span class="sy0">&lt;</span> b.<span class="me1">length</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; c<span class="br0">&#91;</span>n<span class="br0">&#93;</span> <span class="sy0">=</span> b<span class="br0">&#91;</span>k<span class="br0">&#93;</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; k <span class="sy0">+=</span> <span class="nu0">1</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; n <span class="sy0">+=</span> <span class="nu0">1</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span> <span class="kw1">return</span> c<span class="sy0">;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; <span class="br0">&#125;</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; </div></li>
            <li class="li1"><div class="de1">&nbsp; merge<span class="br0">&#40;</span><span class="br0">&#91;</span><span class="nu0">1</span><span class="sy0">,</span><span class="nu0">3</span><span class="sy0">,</span><span class="nu0">5</span><span class="sy0">,</span><span class="nu0">7</span><span class="sy0">,</span><span class="nu0">9</span><span class="br0">&#93;</span><span class="sy0">,</span> <span class="br0">&#91;</span><span class="nu0">2</span><span class="sy0">,</span><span class="nu0">4</span><span class="sy0">,</span><span class="nu0">6</span><span class="sy0">,</span><span class="nu0">8</span><span class="br0">&#93;</span><span class="br0">&#41;</span><span class="sy0">;</span></div></li>
        </ol></div>
    },
    {
        id: 6,
        title: 'Проверка отсортированности массива',
        href: 'https://repl.it/@SergDm/CheckSort',
        code: <div class="javascript"><ol><li class="li1"><div class="de1"><span class="kw2">const</span> check_sort <span class="sy0">=</span> <span class="br0">&#40;</span>a<span class="sy0">,</span> ascending<span class="br0">&#41;</span> <span class="sy0">=&gt;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">let flag <span class="sy0">=</span> <span class="kw2">true</span></div></li>
            <li class="li1"><div class="de1">let s <span class="sy0">=</span> <span class="nu0">2</span> <span class="sy0">*</span> Number<span class="br0">&#40;</span>ascending<span class="br0">&#41;</span> <span class="sy0">-</span> <span class="nu0">1</span></div></li>
            <li class="li1"><div class="de1"><span class="kw1">for</span> <span class="br0">&#40;</span>let i <span class="sy0">=</span> <span class="nu0">0</span><span class="sy0">;</span> i <span class="sy0">&lt;</span> a.<span class="me1">length</span><span class="sy0">;</span> i <span class="sy0">+=</span><span class="nu0">1</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>s <span class="sy0">*</span> a<span class="br0">&#91;</span>i<span class="br0">&#93;</span> <span class="sy0">&gt;</span> s <span class="sy0">*</span> a<span class="br0">&#91;</span>i <span class="sy0">+</span> <span class="nu0">1</span><span class="br0">&#93;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; flag <span class="sy0">=</span> <span class="kw2">false</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw1">break</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="br0">&#125;</span> <span class="kw1">return</span> flag</div></li>
            <li class="li2"><div class="de2"><span class="br0">&#125;</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp;</div></li>
            <li class="li1"><div class="de1">check_sort<span class="br0">&#40;</span><span class="br0">&#91;</span><span class="nu0">17</span><span class="sy0">,</span><span class="nu0">15</span><span class="sy0">,</span><span class="nu0">13</span><span class="sy0">,</span><span class="nu0">11</span><span class="sy0">,</span><span class="nu0">9</span><span class="sy0">,</span><span class="nu0">7</span><span class="sy0">,</span><span class="nu0">5</span><span class="sy0">,</span><span class="nu0">2</span><span class="br0">&#93;</span><span class="sy0">,</span> <span class="kw2">false</span><span>*</span><span class="br0">&#41;</span></div></li>
        </ol><span>*(true в параметрах - по возрастанию, false - по убыванию)</span></div>

    },
    {
        id: 8,
        title: 'Бинарный поиск',
        href: 'https://repl.it/@SergDm/Binary-search',
        code: <div class="javascript"><ol><li class="li1"><div class="de1"><span class="kw2">const</span> left_bound <span class="sy0">=</span> <span class="br0">&#40;</span>arr<span class="sy0">,</span> key<span class="br0">&#41;</span> <span class="sy0">=&gt;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; let left <span class="sy0">=</span> <span class="sy0">-</span><span class="nu0">1</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; let right <span class="sy0">=</span> arr.<span class="me1">length</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="kw1">while</span> <span class="br0">&#40;</span><span class="br0">&#40;</span>right <span class="sy0">-</span> left<span class="br0">&#41;</span> <span class="sy0">&gt;</span> <span class="nu0">1</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; &nbsp; let middle <span class="sy0">=</span> <span class="br0">&#40;</span>left <span class="sy0">+</span> right<span class="br0">&#41;</span> <span class="sy0">/</span> <span class="nu0">2</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>arr<span class="br0">&#91;</span>middle<span class="br0">&#93;</span> <span class="sy0">&lt;</span> key<span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; left <span class="sy0">=</span> middle<span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="br0">&#125;</span> <span class="kw1">else</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; right <span class="sy0">=</span> middle<span class="sy0">;</span> &nbsp;</div></li>
            <li class="li2"><div class="de2">&nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="br0">&#125;</span> <span class="kw1">return</span> left<span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="br0">&#125;</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="kw2">const</span> right_bound <span class="sy0">=</span> <span class="br0">&#40;</span>arr<span class="sy0">,</span> key<span class="br0">&#41;</span> <span class="sy0">=&gt;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; let left <span class="sy0">=</span> <span class="sy0">-</span><span class="nu0">1</span><span class="sy0">;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; let right <span class="sy0">=</span> arr.<span class="me1">length</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="kw1">while</span> <span class="br0">&#40;</span>right <span class="sy0">-</span> left <span class="sy0">&gt;</span> <span class="nu0">1</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; let middle <span class="sy0">=</span> <span class="br0">&#40;</span>left <span class="sy0">+</span> right<span class="br0">&#41;</span> <span class="sy0">/</span> <span class="nu0">2</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>arr<span class="br0">&#91;</span>middle<span class="br0">&#93;</span> <span class="sy0">&lt;=</span> key<span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; left <span class="sy0">=</span> middle<span class="sy0">;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; &nbsp; <span class="br0">&#125;</span> <span class="kw1">else</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; right <span class="sy0">=</span> middle<span class="sy0">;</span> &nbsp;</div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="br0">&#125;</span> <span class="kw1">return</span> right<span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="br0">&#125;</span><span class="sy0">;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; </div></li>
            <li class="li1"><div class="de1">left_bound<span class="br0">&#40;</span><span class="br0">&#91;</span><span class="nu0">1</span><span class="sy0">,</span> <span class="nu0">3</span><span class="sy0">,</span> <span class="nu0">3</span><span class="sy0">,</span> <span class="nu0">6</span><span class="sy0">,</span> <span class="nu0">6</span><span class="sy0">,</span> <span class="nu0">7</span><span class="sy0">,</span> <span class="nu0">8</span><span class="br0">&#93;</span><span class="sy0">,</span> <span class="nu0">6</span><span class="br0">&#41;</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">right_bound<span class="br0">&#40;</span><span class="br0">&#91;</span><span class="nu0">1</span><span class="sy0">,</span> <span class="nu0">3</span><span class="sy0">,</span> <span class="nu0">3</span><span class="sy0">,</span> <span class="nu0">6</span><span class="sy0">,</span> <span class="nu0">6</span><span class="sy0">,</span> <span class="nu0">7</span><span class="sy0">,</span> <span class="nu0">8</span><span class="br0">&#93;</span><span class="sy0">,</span> <span class="nu0">6</span><span class="br0">&#41;</span><span class="sy0">;</span></div></li>
        </ol></div>
    },
    {
        id: 9,
        title: 'Ханойская башня',
        href: 'https://repl.it/@SergDm/Canaan-tower',
        code: <div class="javascript"><ol><li class="li1"><div class="de1"><span class="kw2">const</span> hanoi <span class="sy0">=</span> <span class="br0">&#40;</span>n<span class="sy0">,</span> i<span class="sy0">,</span> k<span class="br0">&#41;</span> <span class="sy0">=&gt;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>n <span class="sy0">===</span> <span class="nu0">1</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; console.<span class="me1">log</span><span class="br0">&#40;</span>`<span class="st0">'Move disk'</span> $<span class="br0">&#123;</span>n<span class="br0">&#125;</span> from pin $<span class="br0">&#123;</span>i<span class="br0">&#125;</span> to $<span class="br0">&#123;</span>k<span class="br0">&#125;</span>`<span class="br0">&#41;</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="br0">&#125;</span> <span class="kw1">else</span> <span class="br0">&#123;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; &nbsp; &nbsp; let tmp <span class="sy0">=</span> <span class="nu0">6</span> <span class="sy0">-</span> i <span class="sy0">-</span> k<span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; hanoi<span class="br0">&#40;</span>n <span class="sy0">-</span> <span class="nu0">1</span><span class="sy0">,</span> i<span class="sy0">,</span> tmp<span class="br0">&#41;</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; console.<span class="me1">log</span><span class="br0">&#40;</span>`<span class="st0">'Move disk'</span> $<span class="br0">&#123;</span>n<span class="br0">&#125;</span> from pin $<span class="br0">&#123;</span>i<span class="br0">&#125;</span> to $<span class="br0">&#123;</span>k<span class="br0">&#125;</span>`<span class="br0">&#41;</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; hanoi<span class="br0">&#40;</span>n <span class="sy0">-</span> <span class="nu0">1</span><span class="sy0">,</span> tmp<span class="sy0">,</span> k<span class="br0">&#41;</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; <span class="br0">&#125;</span><span class="sy0">;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; </div></li>
            <li class="li1"><div class="de1">&nbsp;hanoi<span class="br0">&#40;</span><span class="nu0">4</span><span class="sy0">,</span> <span class="nu0">1</span><span class="sy0">,</span> <span class="nu0">2</span><span class="br0">&#41;</span><span class="sy0">*;</span></div></li>
        </ol><span>*Переложить с первого на второй(i - с которой, k - на которую)</span></div>
    },
    {
        id: 10,
        title: 'Генератор чисел',
        href: 'https://repl.it/@SergDm/Number-generator',
        code: <div class="javascript"><ol><li class="li1"><div class="de1"><span class="kw2">const</span> generate_num <span class="sy0">=</span> <span class="br0">&#40;</span>n<span class="sy0">,</span> m<span class="sy0">,</span> prefix<span class="br0">&#41;</span> <span class="sy0">=&gt;</span><span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>m <span class="sy0">===</span> <span class="nu0">0</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; console.<span class="me1">log</span><span class="br0">&#40;</span>prefix<span class="br0">&#41;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw1">return</span> prefix</div></li>
            <li class="li2"><div class="de2">&nbsp; &nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw1">for</span> <span class="br0">&#40;</span>let digit <span class="sy0">=</span> <span class="nu0">0</span><span class="sy0">;</span> digit <span class="sy0">&lt;</span> n<span class="sy0">;</span> digit <span class="sy0">+=</span> <span class="nu0">1</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; prefix.<span class="me1">push</span><span class="br0">&#40;</span>digit<span class="br0">&#41;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; generate_num<span class="br0">&#40;</span>n<span class="sy0">,</span> m <span class="sy0">-</span> <span class="nu0">1</span><span class="sy0">,</span> prefix<span class="br0">&#41;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; prefix.<span class="me1">pop</span><span class="br0">&#40;</span><span class="br0">&#41;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; </div></li>
            <li class="li1"><div class="de1">generate_num<span class="br0">&#40;</span><span class="nu0">4</span><span class="sy0">,</span><span class="nu0">3</span><span class="sy0">,</span><span class="br0">&#91;</span><span class="br0">&#93;</span><span class="br0">&#41;</span></div></li>
        </ol></div>
    },
    {
        id: 11,
        title: 'Генератор перестановок',
        href: 'https://repl.it/@SergDm/Permutation-generator',
        code: <div class="javascript"><ol><li class="li1"><div class="de1"><span class="kw2">const</span> generate_permutations <span class="sy0">=</span> <span class="br0">&#40;</span>n<span class="sy0">,</span> m <span class="sy0">=</span> n<span class="sy0">,</span> prefix <span class="sy0">=</span> <span class="br0">&#91;</span><span class="br0">&#93;</span><span class="br0">&#41;</span> <span class="sy0">=&gt;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>m <span class="sy0">===</span> <span class="nu0">0</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; console.<span class="me1">log</span><span class="br0">&#40;</span>prefix.<span class="me1">join</span><span class="br0">&#40;</span><span class="st0">' '</span><span class="br0">&#41;</span><span class="br0">&#41;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; &nbsp; <span class="kw1">for</span> <span class="br0">&#40;</span>let number <span class="sy0">=</span> <span class="nu0">1</span><span class="sy0">;</span> number <span class="sy0">&lt;</span> n <span class="sy0">+</span> <span class="nu0">1</span><span class="sy0">;</span> number <span class="sy0">+=</span> <span class="nu0">1</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>find<span class="br0">&#40;</span>number<span class="sy0">,</span> prefix<span class="br0">&#41;</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; <span class="kw1">continue</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span> &nbsp;</div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; prefix.<span class="me1">push</span><span class="br0">&#40;</span>number<span class="br0">&#41;</span><span class="sy0">;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; &nbsp; &nbsp; &nbsp; generate_permutations<span class="br0">&#40;</span>n<span class="sy0">,</span> m <span class="sy0">-</span> <span class="nu0">1</span><span class="sy0">,</span> prefix<span class="br0">&#41;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; &nbsp; prefix.<span class="me1">pop</span><span class="br0">&#40;</span><span class="br0">&#41;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; </div></li>
            <li class="li2"><div class="de2">&nbsp; <span class="kw2">const</span> find <span class="sy0">=</span> <span class="br0">&#40;</span>number<span class="sy0">,</span> a<span class="br0">&#41;</span> <span class="sy0">=&gt;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw1">for</span> <span class="br0">&#40;</span><span class="kw2">const</span> x of a<span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; <span class="kw1">if</span> <span class="br0">&#40;</span>number <span class="sy0">===</span> x<span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; <span class="kw1">return</span> <span class="kw2">true</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; &nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; &nbsp; <span class="br0">&#125;</span> <span class="kw1">return</span> <span class="kw2">false</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; </div></li>
            <li class="li1"><div class="de1">generate_permutations<span class="br0">&#40;</span><span class="nu0">3</span><span class="br0">&#41;</span></div></li>
        </ol></div>
    },
    {
        id: 12,
        title: 'Поиск числа Фибоначи',
        href: 'https://repl.it/@SergDm/Fibonacci-number-search',
        code: <div class="javascript"><ol><li class="li1"><div class="de1"><span class="kw2">const</span> fib <span class="sy0">=</span> <span class="br0">&#40;</span>n<span class="br0">&#41;</span> <span class="sy0">=&gt;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; let fib <span class="sy0">=</span> <span class="br0">&#91;</span><span class="nu0">0</span><span class="sy0">,</span><span class="nu0">1</span><span class="br0">&#93;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="kw1">for</span> <span class="br0">&#40;</span>let i <span class="sy0">=</span> <span class="nu0">2</span><span class="sy0">;</span> i <span class="sy0">&lt;=</span> n<span class="sy0">;</span> i <span class="sy0">+=</span> <span class="nu0">1</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; fib<span class="br0">&#91;</span>i<span class="br0">&#93;</span> <span class="sy0">=</span> fib<span class="br0">&#91;</span>i <span class="sy0">-</span> <span class="nu0">1</span><span class="br0">&#93;</span> <span class="sy0">+</span> fib<span class="br0">&#91;</span>i <span class="sy0">-</span> <span class="nu0">2</span><span class="br0">&#93;</span></div></li>
            <li class="li2"><div class="de2">&nbsp; &nbsp; <span class="br0">&#125;</span> <span class="kw1">return</span> fib<span class="br0">&#91;</span>n<span class="br0">&#93;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; </div></li>
            <li class="li1"><div class="de1">fib<span class="br0">&#40;</span><span class="nu0">10</span><span class="br0">&#41;</span></div></li>
        </ol></div>
    },
    {
        id: 13,
        title: 'Быстрое возведение в степень',
        href: 'https://repl.it/@SergDm/Fast-exponentiation',
        code: <div class="javascript"><ol><li class="li1"><div class="de1"><span class="kw2">const</span> pow <span class="sy0">=</span> <span class="br0">&#40;</span>a<span class="sy0">,</span> n<span class="br0">&#41;</span> <span class="sy0">=&gt;</span> n <span class="sy0">===</span> <span class="nu0">0</span> <span class="sy0">?</span> <span class="nu0">1</span> <span class="sy0">:</span> pow<span class="br0">&#40;</span>a<span class="sy0">,</span> n <span class="sy0">-</span> <span class="nu0">1</span><span class="br0">&#41;</span> <span class="sy0">*</span> a</div></li>
            <li class="li1"><div class="de1">&nbsp;</div></li>
            <li class="li1"><div class="de1"><span class="kw2">const</span> pow2 <span class="sy0">=</span> <span class="br0">&#40;</span>a<span class="sy0">,</span> n<span class="br0">&#41;</span> <span class="sy0">=&gt;</span> n <span class="sy0">===</span> <span class="nu0">0</span> </div></li>
            <li class="li1"><div class="de1"><span class="sy0">?</span> <span class="nu0">1</span> <span class="sy0">:</span> n <span class="sy0">%</span> <span class="nu0">2</span> <span class="sy0">===</span> <span class="nu0">1</span> <span class="sy0">?</span> pow<span class="br0">&#40;</span>a<span class="sy0">,</span> n <span class="sy0">-</span> <span class="nu0">1</span><span class="br0">&#41;</span> <span class="sy0">*</span> a <span class="sy0">:</span> pow<span class="br0">&#40;</span>a <span class="sy0">*</span> a<span class="sy0">,</span> n <span class="sy0">/</span> <span class="nu0">2</span><span class="br0">&#41;</span></div></li>
            <li class="li2"><div class="de2">&nbsp;</div></li>
            <li class="li1"><div class="de1">console.<span class="me1">log</span><span class="br0">&#40;</span>pow<span class="br0">&#40;</span><span class="nu0">8</span><span class="sy0">,</span><span class="nu0">5</span><span class="br0">&#41;</span><span class="br0">&#41;</span></div></li>
            <li class="li1"><div class="de1">console.<span class="me1">log</span><span class="br0">&#40;</span>pow2<span class="br0">&#40;</span><span class="nu0">8</span><span class="sy0">,</span><span class="nu0">3</span><span class="br0">&#41;</span><span class="br0">&#41;</span></div></li>
        </ol></div>
    },
    {
        id: 14 ,
        title: 'Счетчик',
        href: 'https://repl.it/@SergDm/Counter',
        code: <div class="javascript"><ol><li class="li1"><div class="de1"><span class="kw2">const</span> MyTimer <span class="sy0">=</span> <span class="kw2">function</span><span class="br0">&#40;</span>t<span class="sy0">,</span> s <span class="sy0">=</span> <span class="nu0">0</span><span class="br0">&#41;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="kw1">this</span>.<span class="me1">time</span> <span class="sy0">=</span> t</div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="kw1">this</span>.<span class="kw3">stop</span> <span class="sy0">=</span> s</div></li>
            <li class="li1"><div class="de1">&nbsp; </div></li>
            <li class="li2"><div class="de2">&nbsp; <span class="kw1">this</span>.<span class="me1">tick</span> <span class="sy0">=</span> <span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="sy0">=&gt;</span> <span class="br0">&#123;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp;<span class="kw1">this</span>.<span class="me1">time</span> <span class="sy0">-=</span> <span class="nu0">1</span></div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp;console.<span class="me1">log</span><span class="br0">&#40;</span><span class="kw1">this</span>.<span class="me1">time</span><span class="br0">&#41;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="br0">&#125;</span> </div></li>
            <li class="li1"><div class="de1">&nbsp; &nbsp; <span class="kw1">this</span>.<span class="me1">run</span> <span class="sy0">=</span> <span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="sy0">=&gt;</span> setInterval<span class="br0">&#40;</span><span class="br0">&#40;</span><span class="br0">&#41;</span> <span class="sy0">=&gt;</span> <span class="br0">&#40;</span><span class="kw1">this</span>.<span class="me1">time</span> <span class="sy0">&lt;=</span> <span class="kw1">this</span>.<span class="kw3">stop</span><span class="br0">&#41;</span> </div></li>
            <li class="li2"><div class="de2">&nbsp; &nbsp; <span class="sy0">?</span> clearInterval<span class="br0">&#40;</span><span class="kw1">this</span>.<span class="me1">run</span><span class="br0">&#41;</span> <span class="sy0">:</span> <span class="kw1">this</span>.<span class="me1">tick</span><span class="br0">&#40;</span><span class="br0">&#41;</span><span class="sy0">,</span><span class="nu0">1000</span><span class="br0">&#41;</span></div></li>
            <li class="li1"><div class="de1">&nbsp; <span class="br0">&#125;</span></div></li>
            <li class="li1"><div class="de1">&nbsp;</div></li>
            <li class="li1"><div class="de1">let t1 <span class="sy0">=</span> &nbsp;<span class="kw2">new</span> MyTimer<span class="br0">&#40;</span><span class="nu0">10</span><span class="br0">&#41;</span></div></li>
            <li class="li1"><div class="de1">t1.<span class="me1">run</span><span class="br0">&#40;</span><span class="br0">&#41;</span></div></li>
        </ol></div>
    }
]

export default baseCode