import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { List } from './styles';

type Props = {
  source?: Array<any>;
  children?: Array<React.ReactElement> | React.ReactElement;
  className?: string;
  marker?: React.ReactElement;
  color?: string;
  borderColor?: string;
};

export default function Accordion({
  source = [],
  children = [],
  className,
  marker,
  color,
  borderColor,
}: Props) {
  const list = useRef<HTMLDivElement>(null);

  function toggle(index: number) {
    const items = list.current?.querySelectorAll('details');
    items?.forEach((item, i) => i != index && item.removeAttribute('open'));
    items &&
      items[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center',
      });
  }

  return (
    <List
      ref={list}
      className={className}
      color={color}
      borderColor={borderColor}
    >
      {source.concat(children).map((item: any, index) => (
        <details key={index.toString()}>
          <summary onClick={() => toggle(index)}>
            <span>{item.title || item.props.title}</span>
            <span data-color={color || '#000'}>{marker || '+'}</span>
          </summary>
          <div>{item.text ? <p>{item.text}</p> : item}</div>
        </details>
      ))}
    </List>
  );
}

Accordion.propTypes = {
  source: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};
