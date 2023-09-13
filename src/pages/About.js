import CodeBlock from "./../components/CodeBlock";
import CodeLine from "./../components/CodeLine";
import TagContents from "../components/TagContents";
import { TagOpen, TagClose } from "./../components/Tags";

import CircleSvg from "../components/CircleSvg";
import style from "./../styles/About.module.css";

const About = () => {
  return (
    <>
      <div className={style.circle}>
        <img
          className={style.memoji}
          src={`${process.env.PUBLIC_URL}/images/memogi.png`}
          alt="memoji"
        />
        <div className={style.circle_text_box}>
          <CircleSvg
            className={style.circle_svg}
            width={"155%"}
            height={"155%"}
          />
        </div>
      </div>

      <CodeBlock>
        <CodeLine>
          <TagOpen tagname={"html"} attr={"lang"} attrValue={'"ko"'} />
        </CodeLine>

        <CodeLine>
          <TagOpen tagname={"head"} indent={2} />
        </CodeLine>

        <CodeLine>
          <TagOpen tagname={"title"} indent={3} />
        </CodeLine>

        <CodeLine>
          <TagContents indent={4}>
            {" "}
            안녕하세요, 프론트엔드 개발자 박희애입니다! 👩‍💻
            <strong>
              {"("}
              <a
                href="https://heeaepark.notion.site/f2f8c1a4fd104dda97c0fd4dba619d7a?pvs=4"
                target="_blank"
                rel="noopener noreferrer"
              >
                노션 보러가기
              </a>
              {")"}
            </strong>
          </TagContents>
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"title"} indent={3} />
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"head"} indent={2} />
        </CodeLine>

        <CodeLine>
          <TagOpen tagname={"body"} indent={2} />
        </CodeLine>

        <CodeLine>
          <TagOpen
            tagname={"heaeder"}
            attr={"class"}
            attrValue={'"자기소개"'}
            indent={3}
          />
        </CodeLine>

        <CodeLine>
          <TagContents indent={4}>
            안녕하세요! 👋 <br />
            저는 아토믹한 단위의 프론트 개발을 좋아하는 박희애입니다!
          </TagContents>
        </CodeLine>
        <CodeLine>
          <TagContents indent={4}>
            <br />
            아토믹한 디자인 패턴으로 개발하는 것을 좋아하여 작은 단위의
            컴포넌트를 재사용성과 확장성을 고려하며 개발합니다.
            <br />
          </TagContents>
        </CodeLine>
        <CodeLine>
          <TagContents indent={4}>
            <br />
            새롭게 배운 기술을 업무에 적용하여 좀 더 나은 서비스를 구축하는 것에
            가장 큰 보람을 느낍니다.
            <br />
            디자이너, 기획자, 백엔드 개발자와 함께 의견을 나누고 고민을 하며
            프로젝트의 시작과 끝을 맺은 경험이 있습니다.
            <br />
            <br />
            데이터의 Stale 여부에 따라 유저에게 올바르고 정확한 정보를
            제공하고자 하며
            <br />
            컴포넌트의 불필요한 Re-rendering이 발생하지 않도록 최적화를 위해서
            고민하고 노력합니다.
            <br />
          </TagContents>
        </CodeLine>
        <CodeLine>
          <TagContents indent={4}>
            <br />
            제가 하는 일을 좋아하고, 스스로 부족한 부분을 잘 알기에 개발
            공부하는 것이 즐겁습니다.
            <br />
            저는 공부한 것을 팀원들과 나누고 서로 배우는 것에 큰 가치가 있다고
            여깁니다.
            <br />
            완벽하지 않아서 더 나은 서비스를 만드는 것을 함께 고민하고,
            <br />
            각자의 부족함을 서로 채우고, 재능을 인정하는 것이 좋은 기업과
            서비스를 만드는 열쇠라고 생각하며 일합니다.
          </TagContents>
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"heaeder"} indent={3} />
        </CodeLine>

        <CodeLine />

        <CodeLine>
          <TagOpen
            tagname={"main"}
            attr={"class"}
            attrValue={'"기술과 경험, 그리고 공부중인 것들"'}
            indent={3}
          />
        </CodeLine>

        <CodeLine>
          <TagContents indent={5}>
            <h4>💻 사용 기술과 경험</h4>
          </TagContents>
        </CodeLine>
        <CodeLine />
        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt>
                <em>React, Next</em>
              </dt>
              <dd>
                - 각종 Hooks 능숙하게 다룰 수 있으며, 모든 컴포넌트를 함수형으로
                개발합니다.
              </dd>
              <dd>
                - Atomic한 단위의 컴포넌트 개발을 좋아하며, 재사용성과 확장성을
                고려합니다.
              </dd>
              <dd>
                - 재사용성이 높은 공통 비즈니스 로직의 경우 Hook을 이용하여 공통
                Hooks로 만들어 모듈화 합니다.
              </dd>
              <dd>
                - 프로젝트의 규모를 고려하며 프로덕트의 폴더 아키텍쳐를
                구상합니다.
              </dd>
              <dd>
                - 컴포넌트의 불필요한 리렌더링 방지를 위하여 useRef, useMemo
                등을 적절하게 사용합니다.
              </dd>
              <dd>
                - Next의 Dynamic Route와 Pre-Rendering에 대한 이해가 있습니다.
              </dd>
              <dd>
                - css module, styled-components, ant-design과 같은 다양한 디자인
                라이브러리를 능숙하게 다룹니다.
              </dd>
              <dd>- i18next를 이용한 다국어 프로젝트 경험이 있습니다.</dd>
            </dl>
          </TagContents>
        </CodeLine>
        <CodeLine />
        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt>
                <em>Javascript, TypeScript</em>
              </dt>
              <dd>
                - API로 받아온 데이터를 프론트 개발 상황에 맞게 적절히
                가공하거나 다룰 수 있습니다.
              </dd>
              <dd>
                - Props에 올바른 타입의 값이 들어올 수 있도록 typescript를
                사용합니다.
              </dd>
            </dl>
          </TagContents>
        </CodeLine>
        <CodeLine />
        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt>
                <em>Zustand, React-query</em>
              </dt>
              <dd>
                - Zustand를 이용하여 store를 생성하고, 전역 상태관리를 합니다.
              </dd>
              <dd>
                - API 데이터의 경우 React-query를 이용하여 stale 여부에 따라
                refetching이 발생하도록 하여, 유저에게 보여지는 데이터가 언제나
                최신의 상태로 제공되도록 합니다.
              </dd>
              <dd>
                - React-query의 Mutation을 이용하여 서버로 데이터를 생성 및
                업데이트, 삭제할 수 있습니다.
              </dd>
            </dl>
          </TagContents>
        </CodeLine>
        <CodeLine />
        <CodeLine />
        <CodeLine>
          <TagContents indent={5}>
            <h4>✍️ 공부중인 것</h4>
          </TagContents>
        </CodeLine>
        <CodeLine />

        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt>
                <em>GSAP</em>
              </dt>
              <dd>
                - GSAP의 animation, scroll trigger를 활용한 인터랙티브 웹 개발에
                대해 공부중입니다.
              </dd>
            </dl>
          </TagContents>
        </CodeLine>
        <CodeLine />

        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt>
                <em>node.js / mongo DB</em>
              </dt>
              <dd>
                - 백엔드와의 원활한 소통을 위해 node.js와 mongo DB를 공부하고
                있습니다.
              </dd>
            </dl>
          </TagContents>
        </CodeLine>
        <CodeLine />

        <CodeLine>
          <TagClose tagname={"main"} indent={3} />
        </CodeLine>
        <CodeLine />

        <CodeLine>
          <TagOpen
            tagname={"footer"}
            attr={"class"}
            attrValue={'"경력 및 교육"'}
            indent={3}
          />
        </CodeLine>

        <CodeLine>
          <TagContents indent={5}>
            <h4>
              📇 경력 {"("}
              <a
                href="https://heeaepark.notion.site/f2f8c1a4fd104dda97c0fd4dba619d7a"
                target="_blank"
                rel="noopener noreferrer"
              >
                노션 보러가기
              </a>
              {")"}
            </h4>
          </TagContents>
        </CodeLine>
        <CodeLine />
        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt>
                <em>
                  {"("}주{")"}퍼블리시{"("}2023.01 ~ 2023.09{")"}
                </em>
              </dt>
              <dd>
                - 뉴스토마스 웹뷰 애플리케이션과 CMS 개발 및 퍼블리시 NEWS 코인
                Widget 및 Explorer 개발 (정직원/매니저)
              </dd>
            </dl>
          </TagContents>
        </CodeLine>
        <CodeLine />
        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt>
                <em>
                  {"("}주{")"}메이커빌{"("}2020.06 ~ 2022.06{")"}
                </em>
              </dt>
              <dd>
                - 쇼핑몰 개발 및 백오피스 개발, 유지보수 업무 담당 (정직원/사원)
              </dd>
            </dl>
          </TagContents>
        </CodeLine>
        <CodeLine />
        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt>
                <em>
                  {"("}주{")"}누리미디어{"("}2019.03 ~ 2019.05{")"}
                </em>
              </dt>
              <dd>- 학회 홈페이지 유지보수 및 관리 (아르바이트)</dd>
            </dl>
          </TagContents>
        </CodeLine>

        <CodeLine />
        <CodeLine />
        <CodeLine>
          <TagContents indent={5}>
            <h4>👩‍🎓 교육</h4>
          </TagContents>
        </CodeLine>
        <CodeLine />
        <CodeLine>
          <TagContents indent={6}>
            <dl>
              <dt>
                - 한국방송통신대학교 컴퓨터과학과 3학년{"("}2022.03 입학 ~
                휴학중{")"}
              </dt>
              <dt>
                - 이젠아카데미 모바일 웹디자인 & 프론트엔드{"("}UIUX디자인{")"}{" "}
                웹퍼블리셔 과정 수료{"("}2019.08 ~ 2020.01{")"}
              </dt>
            </dl>
          </TagContents>
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"footer"} indent={3} />
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"body"} indent={2} />
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"html"} />
        </CodeLine>
      </CodeBlock>
    </>
  );
};

export default About;
