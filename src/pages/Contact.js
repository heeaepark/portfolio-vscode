import CodeBlock from './../components/CodeBlock';
import CodeLine from './../components/CodeLine';
import EmailForm from "./../components/EmailForm";

import style from './../styles/Contact.module.css';

const Contact = () => {
  const socialItems = [
    {
      social: 'email',
      link: 'kiedev06@gmail.com',
      href: 'mailto:kiedev06@gmail.com',
    },
    {
      social: 'github',
      link: 'heeaepark',
      href: 'https://github.com/heeaepark',
    },
    {
      social: 'instagram',
      link: 'heeming_dev',
      href: 'https://www.instagram.com/heeming_dev',
    },
    {
      social: 'blog',
      link: 'Hello heeming world',
      href: 'https://heeeming.tistory.com/',
    },
    {
      social: 'notion',
      link: 'heeaepark notion',
      href: 'https://heeaepark.notion.site/D-0d433d2f89e345de9f970fb240d92ad5',
    },
    {
      social: 'kakao',
      link: 'kakao open chat',
      href: 'https://open.kakao.com/o/szrbw7Ne'
    }
  ]
  return (
    <>
      <h2 className={style.contact_tit}>Contact with me! 🤙</h2>
      <div className={`${style.contact_item}`}>
        <CodeBlock>
          <CodeLine>
            <span className={style.socials}>.socials</span> {'{'}
          </CodeLine>
          {
            socialItems.map((item, idx) => {
              return (
                <CodeLine key={idx}>
                  <span className={style.social_item}>{item.social}:</span>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.link}
                  </a>
                  <span>;</span>
                </CodeLine>
              )
            })
          }
          <CodeLine>{'}'}</CodeLine>
        </CodeBlock>
      </div>
      <div className={`${style.contact_item}`}>
        <EmailForm />
      </div>
    </>
  )
}

export default Contact;