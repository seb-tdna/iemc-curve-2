import { useEffect } from 'react'
import styles from '../styles/SingleElement.module.css'
export default function SingleElement(props) {
    const slideInfo = COMPONENT_DATA[props.selectedComponent]
    return (
        <div id="abc" className={styles.wrapper} style={{ backgroundImage: `url(${slideInfo.imageUrl})` }}>
            <a className={styles.back} onClick={props.onBack} href="#"><div style={{borderColor: slideInfo.borderColor}}/>Back to Maturity Curve</a>
            <div>
                <div>
                    <h2>{slideInfo.title}</h2>
                    <span>{slideInfo.subTitle}</span>
                    <div className={styles.descriptionContainer}>
                        <p>{slideInfo.description}</p>
                        <div className={styles.listWrapper}>
                            <ul>
                                {slideInfo.list.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const COMPONENT_DATA = {
    Informational: {
        borderColor: '#3366CC',
        imageUrl: '/slide/Informational.jpg',
        title: 'Informational',
        subTitle: 'level two',
        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        list: ['Data influenced decition culture', 'Data influenced decition culture', "Data influenced decition culture"]
    },
    Integrated: {
        borderColor: '#6666CC',
        imageUrl: '/slide/Integrated.jpg',
        title: 'Integrated',
        subTitle: 'level two',
        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        list: ['Data influenced decition culture', 'Data influenced decition culture', "Data influenced decition culture"]
    },
    Digitalized: {
        borderColor: '#6666CC',
        imageUrl: '/slide/Digitalized.jpg',
        title: 'Digitalized',
        subTitle: 'level two',
        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        list: ['Data influenced decition culture', 'Data influenced decition culture', "Data influenced decition culture"]
    },
    Automated: {
        borderColor: '#6633CC',
        imageUrl: '/slide/Informational.jpg',
        title: 'Automated',
        subTitle: 'level two',
        description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        list: ['Data influenced decition culture', 'Data influenced decition culture', "Data influenced decition culture"]
    }
}