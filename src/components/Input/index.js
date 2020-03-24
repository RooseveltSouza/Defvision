import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, TInput } from './styles';

function Input({ style, icon, color, placeholderColor, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && (
        <Icon name={icon} size={20} color={'rgba(255, 255, 255, 0.8)'} />
      )}
      <TInput
        {...rest}
        placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
        ref={ref}
      />
    </Container>
  );
}

// Input.propTypes = {
//   icon: PropTypes.string,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
// };

// Input.defaultProps = {
//   icon: null,
//   style: {},
// };

export default forwardRef(Input);
