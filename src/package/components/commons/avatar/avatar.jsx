import React, { useMemo } from 'react';

import cn from 'classnames';
import makeStyles from '@mui/styles/makeStyles';

import { useAdditionalNodes } from '../../hooks/use_additional_nodes';
import { useReceivedGlobalClasses } from '../../hooks/use_received_global_classes';

import { styles } from './avatar_styles';

import localAvatarStorage from './media/fdp.png';

const useStyles = makeStyles(styles);

const DEFAULT_IMAGE = 'https://i.pravatar.cc/250';
const AvatarComponent = ({ src, displayedName }) => {
    const classes = useStyles();
    const [receivedGlobalClasses] = useReceivedGlobalClasses('banner.avatar');
    const [nodes] = useAdditionalNodes('banner.avatar', null);

    const pictureSource = useMemo(() => src || localAvatarStorage || DEFAULT_IMAGE, [src]);

    return (
        <div className={cn(classes.container, receivedGlobalClasses.container)}>
            <div className={cn(classes.imageContainer, classes.imageContainer)}>
                <img
                    className={cn(classes.image, receivedGlobalClasses.image)}
                    src={pictureSource}
                    alt={displayedName}
                />
            </div>
            {nodes}
        </div>
    );
};

export const Avatar = AvatarComponent;
