import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons"
import React from "react"
import { StyleSheet, View, TouchableOpacity } from "react-native"
import { colors, dimensions, sizes } from "../constants"

import NativeFeedbackView from "./NativeFeedbackView"
import RobotoText from "./RobotoText"

const TaskRecordDetailRow = props => (
  <View style={styles.container}>
    <NativeFeedbackView
      style={styles.taskContent}
      viewStyle={styles.viewStyle}
      onPress={props.onSelect}>
      <View style={styles.index}>
        <RobotoText style={styles.indexText} numberOfLines={1}>
          {props.index}
        </RobotoText>
      </View>
      <RobotoText style={styles.taskTitle} numberOfLines={2}>
        {props.item.title}
      </RobotoText>
      <RobotoText style={styles.taskTime}>{props.item.time}</RobotoText>
    </NativeFeedbackView>
    <TouchableOpacity style={styles.edit} delayPressIn={0}>
      <MaterialCommunityIcons
        name='delete-outline'
        color={colors.primary_transparent}
        size={sizes.control_icon}
        size={22}
      />
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 8
  },
  taskContent: {
    flex: 1,
    height: dimensions.TASK_RECORD_DETAIL_HEIGHT,
    backgroundColor: "transparent",
    flexDirection: "row",
    borderRadius: dimensions.TASK_RECORD_DETAIL_HEIGHT / 2
  },
  index: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.primary,
    borderRadius: 30 / 2,
    borderWidth: 1,
    marginEnd: 10
  },
  indexText: {
    color: colors.primary
  },
  taskTitle: {
    fontFamily: "Roboto",
    color: colors.dark,
    flex: 1,
    marginEnd: 10
  },
  taskTime: {
    color: colors.dark
  },
  viewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10
  },
  edit: {
    width: dimensions.TASK_RECORD_DETAIL_HEIGHT * 0.6,
    height: dimensions.TASK_RECORD_DETAIL_HEIGHT,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default TaskRecordDetailRow