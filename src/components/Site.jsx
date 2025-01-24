import React from 'react'

const siteText = [
    {
        text: ["make", "site compliant with", "html"],
        title: "2차 포트폴리오",
        code: "/",
        view: "/",
        info: [
            "site coding",
            "production period : 2Day",
            "use stack : HTML5, CSS3, Javascript, jQuery"
        ]
    },
    {
        text: ["make", "site compliant with", "css"],
        title: "팀 프로젝트",
        code: "/",
        view: "/",
        info: [
            "site coding",
            "production period : 7Day",
            "use stack : HTML5, CSS3, Javascript, jQuery"
        ]
    },
    {
        text: ["make", "site compliant with", "react"],
        title: "리바트 리디자인",
        code: "/",
        view: "/",
        info: [
            "site coding",
            "production period : 3Day",
            "use stack : HTML5, SCSS, React, Javascript"
        ]
    },
    {
        text: ["make", "site compliant with", "jQuery"],
        title: "1차 포트폴리오",
        code: "/",
        view: "/",
        info: [
            "site coding",
            "production period : 10Day",
            "use stack : HTML5, CSS3, jQuery"
        ]
    },
]

const Site = () => {
    return (
        <section id='site'>
            <div className="site_inner">
                <h2 className='site_title'>
                    site coding <em>나의 작업물</em>
                </h2>
                <div className="site_wrap">

                    {siteText.map((site, key) => (
                        <article className={`site_item s${key+1}`} key={key}>
                            <span className='num'>{key+1}.</span>
                            <div className="text">
                                <div>{site.text[0]}</div>
                                <div>{site.text[1]}</div>
                                <div>{site.text[2]}</div>
                            </div>
                            <h3 className='title'>{site.title}</h3>
                            <div className="btn">
                                <a href={site.code}>code</a>
                                <a href={site.view}>view</a>
                            </div>
                            <div className="info">
                                <span>{site.info[0]}</span>
                                <span>{site.info[1]}</span>
                                <span>{site.info[2]}</span>
                            </div>
                        </article>
                    ))}


                </div>
            </div>
        </section>
    )
}

export default Site