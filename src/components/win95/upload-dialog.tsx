import React from 'react';
import { WindowHeader, Button, Progress } from 'react95';
import { DialogOverlay, DialogWindow, DialogFooter, DialogWindowContent } from './common';

export const W95UploadDialog = (props: {
    visible: boolean;
    cancelled: boolean;
    writtenProgress: number;
    encryptedProgress: number;
    totalProgress: number;
    trackTotal: number;
    trackCurrent: number;
    trackConverting: number;
    titleCurrent: string;
    titleConverting: string;
    handleCancelUpload: () => void;
    progressValue: number;
    bufferValue: number;
    convertedValue: number;
}) => {
    if (!props.visible) {
        return null;
    }

    return (
        <DialogOverlay>
            <DialogWindow>
                <WindowHeader>
                    <span>Recording...</span>
                </WindowHeader>
                <DialogWindowContent>
                    <div style={{ width: '100%' }}>
                        {props.convertedValue === 100 && props.trackConverting === props.trackTotal
                            ? `Conversion completed`
                            : `Converting ${props.trackConverting + 1} of ${props.trackTotal}: ${props.titleConverting}`}
                    </div>
                    <Progress value={Math.floor(props.convertedValue)} />

                    <div style={{ width: '100%', marginTop: 16 }}>
                        Uploading {props.trackCurrent} of {props.trackTotal}: {props.titleCurrent}
                    </div>
                    <Progress value={props.progressValue} />

                    <DialogFooter>
                        <Button disabled={props.cancelled} onClick={props.handleCancelUpload}>
                            {props.cancelled ? `Stopping after current track...` : `Cancel Recording`}
                        </Button>
                    </DialogFooter>
                </DialogWindowContent>
            </DialogWindow>
        </DialogOverlay>
    );
};
