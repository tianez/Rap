import React, { Component } from 'react'

import { WhiteSpace } from 'antd-mobile';

import Text from './Text';
import Date from './Date';
import City from './City';
import Images from './Images';
import Attachment from './Attachment';

import styles from './ListTypes.scss';

const List = ({ data }) => {
    return (
        <div className={styles.warper} title={data.formName}>
            {data.map((field, index) => {
                let data = {
                    ...field,
                    key: field.filedId,
                }
                switch (field.filedType) {
                    case 'text':
                        return <Text {...data} />
                        break;
                    case 'number':
                        return <Text {...data} />
                        break;
                    case 'textarea':
                        return <Text {...data} />
                        break;
                    case 'images':
                        return <Images {...data} />
                        break;
                    case 'attachment':
                        return <Attachment {...data} />
                        break;
                    case 'singlepicker':
                        return <Text {...data} />
                        break;
                    case 'pickercity':
                        return <City {...data} />
                        break;
                    case 'datepicker':
                        return <Date {...data} />
                        break;
                    case 'WhiteSpace':
                        return null
                        break;
                    default:
                        return <Text {...data} />
                        break;
                }
            })}
        </div>
    )
}

export default List