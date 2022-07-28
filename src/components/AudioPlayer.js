import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TrackPlayer, { State, useProgress, useTrackPlayerEvents, Event } from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import RowView from './view/RowView';
import { ColorApp } from '../constans/constants';
import { setFontStyle } from '../utils/utils';
import { iconPause, iconPlay } from '../assets/icons';
import { getFormattedTime } from '../utils/utils';

const AudioPlayer = ({
    _index,
    url,
    onTrackChange,
    style,
    playStyle,
    positionStyle,
    durationStyle
}) => {

    const memoStyle = useMemo(() => [styles.view, style], []);
    const memoPlayStyle = useMemo(() => [styles.play, playStyle], []);
    const memoPositionStyle = useMemo(() => [styles.position, positionStyle], []);
    const memoDurationStyle = useMemo(() => [styles.duration, durationStyle], []);


    const [playing, setPlaying] = useState(false)
    const [index, setIndex] = useState(null)

    const [position, setPosition] = useState(0)
    const [duration, setDuration] = useState(0)
    const progress = useProgress()

    useEffect(() => {

        add()

    }, []);

    const add = async() => {

        const track = {
            id: _index,
            url: url,
            title: "track " + _index,
            artist: "artist " + _index
        }

        let trackIndex = await TrackPlayer.add(track)

        setIndex(trackIndex)

        if(trackIndex === 0) {
            onTrackChange(duration, setDuration, setPosition, setPlaying)
        }
        
        let tracks = await TrackPlayer.getQueue()

        console.log("tracks : ", tracks)

    }

    const play = async() => {

        if(playing || index === null) {
            return
        }

        let currentIndex = await TrackPlayer.getCurrentTrack()
        
        if(currentIndex !== index){

            TrackPlayer.skip(index).then(async(res) => {
                await TrackPlayer.play()
            })

        } else {

            await TrackPlayer.play()

        }

        if(currentIndex !== index) {
            onTrackChange(progress.duration, setDuration, setPosition, setPlaying)
        }

        setPlaying(true)
    }

    const pause = async() => {

        if(!playing) {
            return
        }

        let currentIndex = await TrackPlayer.getCurrentTrack()

        if(currentIndex != index){
            TrackPlayer.skip(index).then(async(res) => {
                await TrackPlayer.pause()
            }).catch(err => {
                console.warn(err)
            })
        } else {
            await TrackPlayer.pause()
        }

        setPosition(progress.position)
        setDuration(progress.duration)
        setPlaying(false)
    }


    return (
        <RowView style={memoStyle}>

            {
                playing
                ?
                <TouchableOpacity
                    style={memoPlayStyle}
                    activeOpacity={0.9}
                    onPress={pause}
                >
                    {iconPause(1.2)}
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={[styles.play, {paddingLeft: 2}]}
                    activeOpacity={0.9}
                    onPress={play}
                >
                    {iconPlay(1.2)}
                </TouchableOpacity>
            }

            <View style={styles.playerView}>
                <RowView style={styles.infoPlayerView}>
                    <Text style={memoPositionStyle}>{getFormattedTime(playing ? progress.position : position)}</Text>
                    <Text style={memoDurationStyle}>{getFormattedTime(playing ? progress.duration : duration)}</Text>
                </RowView>
                <Slider
                    maximumValue={playing ? progress.duration : duration}
                    value={playing ? progress.position : position}
                    onValueChange={() => {}}
                    onSlidingComplete={() => {}}
                    thumbTintColor={ColorApp.primary}
                    minimumTrackTintColor={ColorApp.primary}
                    maximumTrackTintColor={"#F1F2FE"}
                />
            </View>
        </RowView>
    )
};

const styles = StyleSheet.create({
    view: {
        marginBottom: 16,
        padding: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
    },
    play: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: ColorApp.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16
    },
    playerView: {
        flex: 1
    },
    infoPlayerView: {
        backgroundColor: ColorApp.transparent,
        justifyContent: 'space-between'
    },
    position: {
        ...setFontStyle(13)
    },
    duration: {
        ...setFontStyle(13)
    }
});

export default AudioPlayer;
