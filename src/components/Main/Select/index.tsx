import React, {useEffect, useState} from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import arrow from '../../../assets/select/arrow.png';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../../store/store';


const cx = classNames.bind(styles);


const Select = () => {

    const currentSection = useSelector<AppStoreType, 'Blogs' | 'Posts'>(
        ({app}) => app.currentSection,
    );

    const blogsOptions = [
        'New blogs first',
        'Old blogs first',
        'From A to Z',
        'From Z to A'
    ]

    const postsOptions = [
        'New posts first',
        'Old posts first'
    ]


    const [options, setOptions] = useState<Array<string>>(blogsOptions)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(options[0])


    useEffect(() => {
        currentSection === 'Blogs'
            ? setOptions(blogsOptions)
            : setOptions(postsOptions)
    }, [currentSection])

    useEffect(() => {
        setTitle(options[0])
    }, [options])



    return (<div className={cx('select', {
            select_active: isOpen
        })}>

            <div className={cx('select_header')}
                 onClick={() => setIsOpen(!isOpen)}>
                 <span>
            {title}
         </span>
                <img className={cx('select_arrow', {
                    select_arrow_active: isOpen
                })}
                     src={arrow} alt=""/>

            </div>
            <div className={cx('select_body', {
                select_body_active: isOpen
            })}>
                {options.filter(option => option !== title)
                    .map((option, index) => <div className={cx('select_body_option')}
                                        key={index}
                                        onClick={() => setTitle(option)}>
                        {option}
                    </div>)}
            </div>
        </div>
    );
}

export default Select;
