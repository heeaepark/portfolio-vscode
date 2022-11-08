import { useState } from 'react';

import CodeBlock from './../components/CodeBlock';
import CodeLine from './../components/CodeLine';
import TagContents from '../components/TagContents';
import { TagOpen, TagClose  } from './../components/Tags'

const About = () => {
  return (
    <>
      <CodeBlock>
        <CodeLine>
          <TagOpen tagname={'html'} attr={'lang'} attrValue={'"en"'} />
        </CodeLine>
          <CodeLine>
            <TagContents>
              <TagOpen tagname={'head'}/>
            </TagContents>
          </CodeLine>
            <CodeLine>
              <TagContents>으아아아 어려워!</TagContents>
            </CodeLine>
          <CodeLine>
            <TagContents>
              <TagClose tagname={'head'}/>
            </TagContents>
          </CodeLine>
        <CodeLine>
          <TagClose tagname={'html'} />
        </CodeLine>
      </CodeBlock>
    </>
  )
}

export default About;