import React, { useState } from 'react'
import {Button, StyleSheet, TextInput, View} from 'react-native'

const TodoInsert = ({onAddTodo}) => {
  const [newTodoItem, setTodoItem] = useState('')
  const todoInputHandler = newTodo => {
    setTodoItem(newTodo)
  }
  const addToHandler = () => {
    onAddTodo(newTodoItem)
    setTodoItem('')
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add an item!"
        placeholderTextColor={'#999'}
        autoCorrect={false}
        onChangeText={todoInputHandler}
        value={newTodoItem}
      />
      <View style={styles.button}>
        <Button title={'ADD'} onPress={addToHandler} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
  },
})

export default TodoInsert