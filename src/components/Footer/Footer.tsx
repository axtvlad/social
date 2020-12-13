import React, {FC} from 'react';
import {Affix, Layout} from "antd"

export const Footer: FC = (props) => {
    const {Footer} = Layout

    return (
        <Affix offsetBottom={0}>
            <Footer style={{textAlign: 'center'}}>Social App ©2020 Created by Axt Vladislav</Footer>
        </Affix>
    );
}