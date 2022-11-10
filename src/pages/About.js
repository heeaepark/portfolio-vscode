import { useEffect, useRef, useState } from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

import CodeBlock from './../components/CodeBlock';
import CodeLine from './../components/CodeLine';
import TagContents from '../components/TagContents';
import { TagOpen, TagClose  } from './../components/Tags';

import CircleSvg from '../components/CircleSvg';
import style from './../styles/About.module.css';

const About = () => {
  return (
    <>
      <div className={style.circle}>
        <img className={style.memoji} src={`${process.env.PUBLIC_URL}/images/memogi.png`} alt="memoji" />
        <div className={style.circle_text_box}>
          <CircleSvg className={style.circle_svg} width={'155%'} height={'155%'}/>
        </div>
      </div>

      <CodeBlock>

        <CodeLine>
          <TagOpen tagname={'html'} attr={'lang'} attrValue={'"ko"'} />
        </CodeLine>

        <CodeLine>
          <TagOpen tagname={'head'} indent={2}/>
        </CodeLine>

        <CodeLine>
          <TagOpen tagname={'title'} indent={3}/>
        </CodeLine>

        <CodeLine>
          <TagContents indent={4} > 안녕하세요, 저는 인터랙티브 웹 공부를 좋아하는 박희애입니다. 👩‍💻</TagContents>
        </CodeLine>

        <CodeLine>
          <TagClose tagname={'title'} indent={3}/>
        </CodeLine>

        <CodeLine>
          <TagClose tagname={'head'} indent={2}/>
        </CodeLine>



        <CodeLine>
          <TagOpen tagname={'body'} indent={2}/>
        </CodeLine>

        <CodeLine>
          <TagOpen tagname={'heaeder'} attr={'class'} attrValue={'"자기소개"'} indent={3} />
        </CodeLine>

        <CodeLine>
          <TagContents indent={4}>
            안녕하세요! 👋 <br/> 
            저는 인터랙티브 웹 기술과 프론트엔드 개발에 관심이 많은 <br/> 
            2년차 웹퍼블리셔 박희애 입니다.
          </TagContents>
        </CodeLine>
        <CodeLine>
          <TagContents indent={4}>
            <br/>
            웹 표준성을 지키려 노력하고, 컴포넌트의 재사용성을 고려하여 개발합니다. <br/>
            그리고 사용자의 관점에서 '잘 만든' 웹을 만드는 것에 대해 언제나 고민합니다.<br/>
            새로운 웹 기술과 지식에 대해 관심이 많고 꾸준히 공부하고 있습니다. 📝<br/>
          </TagContents>
        </CodeLine>
        <CodeLine>
          <TagContents indent={4}>
            <br/>
            새롭게 배운 기술을 업무에 적용하여 좀 더 나은 서비스를 구축하는 것에 가장 큰 보람을 느낍니다.<br/>
            디자이너, 기획자와 함께 의견을 나누고 고민을 하며 프로젝트의 시작과 끝을 맺은 경험이 있습니다. <br/>
            가장 좋아하는 것은 SCSS를 통해 CSS를 작은 컴포넌트 단위로 개발하여 확장성을 높이는 것이고,<br/>
            개발자의 관점에서 개발하기 쉽게 꼼꼼하게 주석 달기가 취미{'(?)'}입니다.<br/>
            실제로 같이 일했던 팀원분이 제가 만든 마크업 페이지는 개발하기 쉽다고 말씀해주셔서<br/>
            뿌듯했던 기억이 있습니다. ✨
          </TagContents>
        </CodeLine>
        <CodeLine>
          <TagContents indent={4}>
            <br/>
            제가 하는 일을 좋아하고, 스스로 부족한 부분을 잘 알기에 개발 공부하는 것이 즐겁습니다.<br/>
            저는 공부한 것을 팀원들과 나누고 서로 배우는 것에 큰 가치가 있다고 여깁니다.<br/>
            완벽하지 않아서 더 나은 서비스를 만드는 것을 함께 고민하고,<br/>
            각자의 부족함을 서로 채우고, 재능을 인정하는 것이 좋은 기업과 서비스를 만드는 열쇠라고 생각합니다.
          </TagContents>
        </CodeLine>

        <CodeLine>
          <TagClose tagname={'heaeder'} indent={3}/>
        </CodeLine>

        <CodeLine></CodeLine>

        <CodeLine>
          <TagOpen tagname={'main'} attr={'class'} attrValue={'"기술과 경험, 그리고 공부중인 것들"'} indent={3} />
        </CodeLine>

        <CodeLine>
          <TagContents indent={5}>
            <h4>💻 사용 기술과 경험</h4>
          </TagContents>
        </CodeLine>
        <CodeLine></CodeLine>
        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt><em>HTML & CSS</em></dt>
              <dd>- 크로스브라우징 & 시맨틱 마크업을 준수합니다.</dd>
              <dd>- 반응형/적응형 개발 경험이 있습니다.</dd>
              <dd>- 애니메이션 활용 가능합니다.</dd>
              <dd>- 변수 사용 경험이 있습니다.</dd>
              <dd>- Flex & Grid에 대한 이해도가 높고 사용 경험이 있습니다.</dd>
            </dl>
          </TagContents>
        </CodeLine>
        <CodeLine></CodeLine>
        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt><em>SCSS</em></dt>
              <dd>- css를 컴포넌트화 하여 모듈 형태로 개발할 수 있습니다.</dd>
              <dd>- Mixins를 확장성 있게 개발하여 재사용성을 높일 수 있습니다.</dd>
              <dd>- 함수와 조건문을 사용할 수 있습니다.</dd>
            </dl>
          </TagContents>
        </CodeLine>
        <CodeLine></CodeLine>
        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt><em>Javascript</em></dt>
              <dd>- 기본적인 자바스크립트 문법에 대해 이해하고 있습니다.</dd>
              <dd>- 함수를 만들어 사용하고 인자를 전달할 수 있습니다.</dd>
              <dd>- 배열과 객체 문법에 대해서 이해하고 메서드를 사용한 경험이 있습니다.</dd>
              <dd>- 로컬스토리지를 활용하여 토이프로젝트를 개발한 경험이 있습니다.</dd>
              <dd>- ES6 문법에 대해 꾸준히 공부하고 있습니다.{'('}클래스, this, 화살표함수, 비구조화할당 등{')'}</dd>
            </dl>
          </TagContents>
        </CodeLine>
        <CodeLine></CodeLine>
        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt><em>React</em></dt>
              <dd>- 리액트 프로젝트 경험이 있습니다.</dd>
              <dd>- 기본 문법에 대한 이해가 있습니다.</dd>
              <dd>- React hooks 사용 경험이 있습니다.</dd>
              <dd>- Router를 이용한 SPA 개발 경험이 있고 조건에 따라 컴포넌트 분기 처리를 할 수 있습니다.</dd>
              <dd>- 함수형 컴포넌트를 만들어 props를 전달하고 받을 수 있습니다.</dd>
              <dd>- 로컬스토리지에 저장한 데이터를 불러와 컴포넌트에 바인딩한 경험이 있습니다.</dd>
              <dd>- React Bootstrap / Styled-components / SCSS / css-module을 모두 사용할 수 있습니다.</dd>
              <dd>- Redux toolkit을 사용한 경험이 있습니다.</dd>
              <dd>- useEffect를 활용하여 App과 컴포넌트의 Lifecycle을 관리한 경험이 있습니다.</dd>
            </dl>
          </TagContents>
        </CodeLine>
        <CodeLine></CodeLine>
        <CodeLine></CodeLine>
        <CodeLine>
          <TagContents indent={5}>
            <h4>✍️ 공부중인 것</h4>
          </TagContents>
        </CodeLine>
        <CodeLine></CodeLine>

        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt><em>SVG</em></dt>
              <dd>- canvas와 svg를 활용하여 웹드로잉 기술과 이미지 최적화에 대해 공부중입니다.</dd>
            </dl>
          </TagContents>
        </CodeLine>
        <CodeLine></CodeLine>

        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt><em>GSAP</em></dt>
              <dd>- GSAP의 animation, scroll trigger를 활용한 인터랙티브 웹 개발에 대해 공부중입니다.</dd>
            </dl>
          </TagContents>
        </CodeLine>
        <CodeLine></CodeLine>

        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt><em>Three.js</em></dt>
              <dd>- webGL라이브러리인 Three.js를 활용하여 웹3D 기술을 공부중입니다.</dd>
            </dl>
          </TagContents>
        </CodeLine>
        <CodeLine></CodeLine>

        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt><em>JS</em></dt>
              <dd>- 인터랙티브 웹 개발을 위해 DOM, Event에 대해 공부하고 있습니다.</dd>
              <dd>- 다양한 메서드에 대해서 공부하고 정리하고 있습니다.</dd>
              <dd>- 클래스, 콜백, 프로미스, 클로저를 이해하기 위해 공부하고 있습니다.</dd>
            </dl>
          </TagContents>
        </CodeLine>

        <CodeLine>
          <TagClose tagname={'main'} indent={3}/>
        </CodeLine>
        <CodeLine></CodeLine>

        <CodeLine>
          <TagOpen tagname={'article'} attr={'class'} attrValue={'"교육 및 경력"'} indent={3} />
        </CodeLine>
        <CodeLine>
          <TagClose tagname={'article'} indent={3}/>
        </CodeLine>
        

        <CodeLine>
          <TagClose tagname={'body'} indent={2}/>
        </CodeLine>

        <CodeLine>
          <TagClose tagname={'html'} />
        </CodeLine>

      </CodeBlock>
    </>
  )
}

export default About;