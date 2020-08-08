import React from 'react';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
  name: string;
  color: string;
  size: number;
}
function TabBarIcon(props: Props) {
  return <MaterialIcons style={{ marginBottom: -3 }} {...props} />;
}

export default TabBarIcon;
