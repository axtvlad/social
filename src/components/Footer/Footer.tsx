import React, {CSSProperties, FC} from 'react';
import {Affix, Button, Layout} from "antd"

export const Footer: FC = (props) => {
    const {Footer} = Layout

    const styles = {
        footer: {
            textAlign: "center"
        } as CSSProperties
    }

    return (
        <Affix offsetBottom={0}>
            <Footer style={styles.footer}>
                Social Network (2019 - 2021). Created by
                <Button
                    type={"link"}
                    href={'https://t.me/axtvlad'}
                    target={'_blank'}
                    rel={'noreferrer'}
                >
                    Axt Vladislav
                </Button>
            </Footer>
        </Affix>
    );
}