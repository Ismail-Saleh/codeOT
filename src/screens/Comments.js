import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, TextInput,FlatList } from 'react-native';
import { Button, Header, Content, Left, Right, Item, Input, CardItem, Body, Text, Icon, Footer, FooterTab, Container } from 'native-base';

import Comment from '../components/commentsComponent'

class Comments extends Component {
    constructor(){
        super()
        this.state = {
            user:'Joker',
            ava:'https://www.raveituptv.com/wp-content/uploads/2014/11/HEATH_LEDGER_the_Joker_by_BobbyC1225.jpg',
            comments:'',
        
            data:[
                {
                    ava:'https://honeysanime.com/wp-content/uploads/2016/03/fhana-towana.jpg',
                    user: 'Fhana Towana',
                    comment:'This is Awesome!!'
                },
                {
                    ava:'https://i.pinimg.com/originals/df/9f/1a/df9f1a9641f1ee1dc883be326c2efdcb.jpg',
                    user: 'Hiroki Moriuchi',
                    comment: 'Do Java to compose a song, Thats how Mili Work'
                },
                {
                    ava:'https://www.gwigwi.com/wp-content/uploads/2018/07/gwigwi.com-aimer-rilis-lagu-baru-berjudul-black-bird-untuk-lagu-utama-film-kasane-aimer.jpg',
                    user: 'Jenifer Lee',
                    comment: "Can't Wait!!"
                },
                {
                    ava:'https://www.cuttingedge.com.au/wp-content/uploads/2018/10/Michael-Myers-in-Halloween-2018.jpg',
                    user: 'Michael Myer',
                    comment: "World.Execute(Me)"
                },
                {
                    ava:'https://cinemags.co.id/wp-content/uploads/2019/09/Freddy-Krueger-735x400.jpg',
                    user: 'Freddy Krueger',
                    comment: "OMG!!"
                }
            ]
        }
    }
    handlePress = () => {
       
        this.setState({
            data:[
                {
                    user:this.state.user,
                    ava: this.state.ava,
                    comment:this.state.comments
                },
                ...this.state.data
            ],
            comments:""
        })
    }

    renderComment = ({item}) => {
        return (
            <Comment
                ava ={item.ava}
                user={item.user}
                comment={item.comment}
            />
        )
    }
    
    handleComment= (text) => {
        this.setState({
          comments:text
        })
    }

   


    render() {
        console.log(this.state.data);
        
        return (
            <Container >
                <Content>
                <View style={[styles.flex, styles.row, styles.header]}>
                        <View>
                            <Icon name='thumbs-up' style={styles.iconLike} />
                        </View>
                        <View>
                            <Icon name='heart' style={styles.iconLove} />
                        </View>
                        <View>
                            <Text style={[styles.user, { marginLeft: 10 }]}>
                                M Kelvin and 629 others >
                            </Text>
                        </View>
                </View>


                
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderComment}
                    />


                </Content>
                <Footer>
                    <FooterTab style={{ backgroundColor: '#EBEBEB' }}>
                        <View style={[styles.flex, styles.row, styles.header]}>
                            <View>
                                <Button transparent style={{marginLeft:-10}}>
                                    <Icon name='camera' style={{ color: '#999', paddingBottom: 8 }} />
                                </Button>
                                
                            </View>
                           <View>
                                <Item rounded style={{width:220,marginTop:-12,height:37,backgroundColor:'#e3e3e3'}}>
                                    <Input style={{color:'#888'}} placeholder='Write a comment...' onChangeText={this.handleComment} value={this.state.comments} />
                                </Item>
                           </View>
                           <View>
                                <Button transparent>
                                    <Icon name='image' style={{ color: '#999', paddingBottom: 8 }} />
                                </Button>
                                
                            </View>
                           <View>
                                <Button transparent style={{marginLeft:-14}} onPress={this.handlePress}>
                                    <Icon name='send' style={{ color: '#999', paddingBottom: 8 }} />
                                </Button>
                                
                            </View>
                        </View>

                    </FooterTab>
                </Footer>
            </Container>


        );
    }
}

export default Comments;

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
        marginTop: 10,
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
        fontSize: 15,
        backgroundColor: '#8098F0',
        textAlign: 'center',
        width: 27,
        height: 27,
        borderRadius: 100,
        paddingTop: 5,
        color: 'white',
        zIndex: 1,
        borderWidth: 2,
        borderColor: 'white'
    },
    iconLove: {
        fontSize: 15,
        backgroundColor: '#F46BA1',
        textAlign: 'center',
        width: 25,
        height: 25,
        borderRadius: 100,
        paddingTop: 5,
        marginLeft: -5,
        color: 'white'
    }

})