import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert, FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  shape, string, instanceOf, arrayOf,
} from 'prop-types';

export default function MemoList(props) {
  const navigation = useNavigation();
  const { memos } = props;

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle} numberOfLines={1}>{item.bodyText}</Text>
          <Text style={styles.memoListItemDate}>{String(item.updatedAt)}</Text>
        </View>
        <TouchableOpacity
          onPress={() => { Alert.alert('Are you sure?'); }}
          style={styles.memoDelete}
        >
          <Feather name="x" size={16} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        // eslint-disable-next-line react/jsx-no-bind
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

MemoList.propTypes = {
  memos: arrayOf(shape({
    id: string,
    bodyText: string,
    updateAt: instanceOf(Date),
  })).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  memoListItem: {
    backgroundColor: '#ffffff',
    // frexDirectionでflex-boxの方向を縦方向から横方向に変更する
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  memoDelete: {
    paddingLeft: 15,
    paddingVertical: 15,
  },
});
