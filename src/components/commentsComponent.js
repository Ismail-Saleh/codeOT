import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, TextInput } from 'react-native';
import { Text, Icon} from 'native-base';
import { Avatar } from 'react-native-elements';
class CommentsComponent extends Component {
    render() {
        return (
            <View>
                <View style={[styles.flex, styles.row, styles.header, { paddingBottom: 0 }]}>
                        <View>
                            <Avatar
                                size='small'
                                rounded
                                source={{
                                    uri: this.props.ava
                                        
                                }}
                            />
                        </View>
                        <View>
                            <Text style={{ fontSize: 13, marginLeft: 15, backgroundColor: '#F1F2F6', padding: 7, fontWeight: 'bold', borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
                                {this.props.user}
                            </Text>
                            <Text style={{ fontSize: 13, marginLeft: 15, maxWidth: 250, backgroundColor: '#F1F2F6', padding: 7, borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                                {this.props.comment}
                            </Text>
                            <View style={[styles.flex, styles.row]}>
                                <View>
                                    <Text style={{ marginLeft: 15, marginTop: 5 }} note>
                                        1hr
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{ marginLeft: 15, marginTop: 5,fontWeight:'bold' }} note>
                                        Like
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{ marginLeft: 15, marginTop: 5,fontWeight:'bold' }} note>
                                        Reply
                                    </Text>
                                </View>
                            </View>
                        </View>
                </View>
            </View>
        );
    }
}

export default CommentsComponent;

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