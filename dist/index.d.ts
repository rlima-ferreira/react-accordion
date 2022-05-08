import React from 'react';
import PropTypes from 'prop-types';
declare type Props = {
    source?: Array<any>;
    children?: Array<React.ReactElement> | React.ReactElement;
    className?: string;
    marker?: React.ReactElement;
    color?: string;
    borderColor?: string;
};
declare function Accordion({ source, children, className, marker, color, borderColor, }: Props): JSX.Element;
declare namespace Accordion {
    var propTypes: {
        source: PropTypes.Requireable<(PropTypes.InferProps<{
            title: PropTypes.Validator<string>;
            text: PropTypes.Validator<string>;
        }> | null | undefined)[]>;
    };
}
export default Accordion;
