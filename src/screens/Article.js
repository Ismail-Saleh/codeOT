import React, { Component } from 'react';
import { StyleSheet, Dimensions,View} from 'react-native';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


class Welcome extends Component {
    constructor(){
        super();
        this.state ={
            like: null,
            color:'#666',
            textLike:'Like'
        }
    }

    pressComment = () => {
        this.props.navigation.navigate('Comments');
    }
    likePress = ()=>{
       if (this.state.like == null) {
        this.setState(
            {
                like:1,
                color:'#8098F0',
                textLike:'Unlike'
            }
        )           
       }
       else{
        this.setState(
            {
                like:null,
                color:"#666",
                textLike:'Like'
            }
        ) 
       }
    }

    render() {
        console.log(this.props)
        return (
            <Container>
                <Content>
                    <Card>

                        <CardItem style={{paddingBottom:-30}}>
                            <Left>
                                <Thumbnail source={{ uri: 'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg' }} />
                                <Body>
                                    <Text style={styles.user}>
                                        Desti Karolina Sinuhaji
                                        <Text> > </Text>
                                        <Text>IF ITHB</Text>
                                    </Text>
                                    <Text note>
                                        1 hr
                                        <Text note style={{ fontSize: 18, fontWeight: 'bold' }}> . </Text>
                                        <Icon style={{ color: '#999', fontSize: 18 }} name="calendar" />
                                    </Text>
                                </Body>


                            </Left>
                        </CardItem>
                        <CardItem>
                            <Text style={styles.detail}>
                                Yuk ikutan CEO Talk  "A Brief Story of AI Development in Today World" di Institut Teknologi  Harapan Bangsa yang akan  diadakan pada :
                                {'\n'}
                                Hari/ Tanggal : Jum'at, 14 Februari 2020{'\n'}
                                Pukul : 14:00 - 16:15 WIB{'\n'}
                                Assembly Hall lt. 5, Kampus Harapan Bangsa
                            </Text>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://asset.kompas.com/crops/MZ3hMAZx3Rf7G7m4iXNlU221MY0=/0x0:780x520/750x500/data/photo/2019/10/25/5db2ca2b3a1e3.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Icon name='thumbs-up' style={styles.iconLike} />
                            <Text style={{ marginLeft: 3, fontSize: 12,fontWeight:'bold' }}> {this.state.like}</Text>
                        </CardItem>
                        <View
                            style={{
                                borderBottomColor: '#eee',
                                borderBottomWidth: 1,
                                width: width - (20 * 2),
                                marginLeft:20
                            }}
                        />
                        <CardItem style={{paddingTop:-40}}>
                            <Left style={{ paddingLeft: 30 }}>
                                <Button transparent onPress={this.likePress}>
                                    <Icon style={{ color: this.state.color }} name="thumbs-up" />
                                    <Text style={{ color: this.state.color }}>{this.state.textLike}</Text>
                                </Button>
                            </Left>

                            <Right style={{ paddingRight: 30 }}>
                                <Button transparent onPress={this.pressComment}>
                                    <Icon style={{ color: '#666' }} name="chatbubbles" />
                                    <Text style={{ color: '#666' }}>Comments</Text>
                                </Button>
                            </Right>


                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default Welcome;

const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    column: {
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row'
    },
    header: {
        marginTop: 30,
        padding: 12,
        

    },
    article: {
        paddingLeft: 20,
        marginTop: 5
    },
    user: {
        fontWeight: 'bold',
        fontSize: 15
    },
    detail: {
        fontSize: 15,
        paddingBottom: 30
    },
    iconLike: {
        fontSize: 17,
        backgroundColor: '#8098F0',
        textAlign: 'center',
        width: 30,
        height: 30,
        borderRadius: 100,
        paddingTop: 5,
        color: 'white'
    }


})