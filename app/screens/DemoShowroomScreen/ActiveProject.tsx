import { Text } from 'app/components';
import { navigate } from 'app/navigators';
import { colors, spacing } from 'app/theme';
import React, { useCallback} from 'react'
import { TouchableOpacity, View, ViewStyle } from 'react-native';

interface ActiveProjectProps {
  project: {
    id: string,
    name: string,
    author: string,
    description: string,
    status: string,
    tags: Array<string>,
  }
}

function ActiveProject(props: ActiveProjectProps) {
  const {project} = props;
  const openDetailProject = useCallback((project) => {
    navigate("ActiveProjectDetail", {project})
  }, []);
  return (
    (
      <TouchableOpacity
        key={project.id}
        style={$container}
        onPress={() => openDetailProject(project)}
      >
        <Text size="lg" preset="bold">
          {project.name}
        </Text>
        <View style={$row}>
          <Text size="md" style={$leftTitle}>{project.author}</Text>
          <Text size="xs" style={$rightTitle}>
            {project.status}
          </Text>
        </View>
      </TouchableOpacity>
    )
  )
}

export default ActiveProject

const $container: ViewStyle = {
  backgroundColor: colors.palette.white,
  padding: spacing.large,
  marginTop: spacing.medium,
  borderRadius: 10,
}

const $row: ViewStyle = {
  flexDirection: "row", 
  alignItems: "flex-end"
}

const $leftTitle: ViewStyle = {
  flex: 1,
}

const $rightTitle: ViewStyle = {
  alignSelf: "flex-end",
}