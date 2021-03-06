import { COLOR } from "@style";
import React, { FunctionComponent, memo } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
const Setting: FunctionComponent = props => {
    return (
        // <SafeAreaView>
        //     {/* <StatusBar backgroundColor={COLOR.SETTINGS} /> */}
        //     <Text
        //         style={{
        //             textAlign: "center"
        //         }}
        //     >Setting</Text>
        // </SafeAreaView>

        <Container>
            <Content>
                <ListItem icon>
                    <Left>
                        <Button style={{ backgroundColor: "#FF9501" }}>
                            <Icon active name="airplane" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Airplane Mode</Text>
                    </Body>
                    <Right>
                        <Switch />
                    </Right>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Button style={{ backgroundColor: "#007AFF" }}>
                            <Icon active name="wifi" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Wi-Fi</Text>
                    </Body>
                    <Right>
                        <Text>GeekyAnts</Text>
                        <Icon active name="arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Button style={{ backgroundColor: "#007AFF" }}>
                            <Icon active name="bluetooth" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Bluetooth</Text>
                    </Body>
                    <Right>
                        <Text>On</Text>
                        <Icon active name="arrow-forward" />
                    </Right>
                </ListItem>
            </Content>
        </Container>
    )

}

export default memo(Setting)