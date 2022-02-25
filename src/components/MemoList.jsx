import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

export default function MemoList() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2022年2月20日 18:28</Text>
        </View>
        <TouchableOpacity>
          <Feather name="x" size={16} color="#B0B0B0" />
        </TouchableOpacity>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2022年2月20日 18:28</Text>
        </View>
        <TouchableOpacity>
          <Feather name="x" size={16} color="#B0B0B0" />
        </TouchableOpacity>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2022年2月20日 18:28</Text>
        </View>
        <TouchableOpacity>
          <Feather name="x" size={16} color="#B0B0B0" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
