import React from 'react';

import { css } from '@emotion/css';
import { Badge, Tooltip } from '@grafana/ui';
import { observer } from 'mobx-react';

import { Avatar } from 'components/Avatar/Avatar';
import { Text } from 'components/Text/Text';
import { GrafanaTeam } from 'models/grafana_team/grafana_team.types';

interface TeamNameProps {
  team: GrafanaTeam;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export const TeamName = observer((props: TeamNameProps) => {
  const { team, size = 'medium', className } = props;
  if (!team) {
    return null;
  }
  if (team.id === 'null') {
    return <Badge text={team.name} color={'blue'} tooltip={'Resource is not assigned to any team (ex General team)'} />;
  }
  return (
    <Text type="secondary" size={size} className={className}>
      <Avatar
        size="small"
        src={team.avatar_url}
        className={css`
          margin-right: 4px;
        `}
      />
      <Tooltip placement="top" content={'Resource is assigned to ' + team.name}>
        <Text type="primary">{team.name}</Text>
      </Tooltip>
    </Text>
  );
});
