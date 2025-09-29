import { memo, useCallback, useState } from 'react';
import CheckIcon from '@/shared/assets/icons/check.svg';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;
    const [isCopied, setIsCopied] = useState(false);

    const onCopy = useCallback(() => {
        try {
            navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        } catch (e) {
            setIsCopied(false);
        }
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                disabled={isCopied}
                square
                theme={ButtonTheme.CLEAR}
                onClick={onCopy}
                className={cls.copyButton}
            >
                {isCopied ? <CheckIcon /> : <CopyIcon />}
            </Button>
            <code className={cls.content}>
                {text}
            </code>
        </pre>
    );
});
