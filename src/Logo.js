import React from 'react';
import PropTypes from 'prop-types';
import useTheme from 'utils/useTheme';

const logoTypes = {
  type: PropTypes.oneOf(['dark', 'light']),
  title: PropTypes.string,
  width: PropTypes.number,
};

const defaultProps = {
  type: 'dark',
  title: 'Trig Logo',
  width: 126,
};

const Logo = ({ type, title, width, ...restProps }) => {
  const theme = useTheme();
  let fillColor = theme.pc;
  if (type === 'light') {
    fillColor = theme.p;
  }
  const aspectRatio = 44 / 126;

  return (
    <svg
      width="126"
      height="44"
      x="0px"
      y="0px"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 126 44"
      css={`
        width: ${width}px;
        height: ${width * aspectRatio}px;
      `}
      {...restProps}
    >
      <defs>
        <path id="SmBMOlIKNNbB" d="M0 149.953h199.938V0H0z" />
      </defs>
      <g
        id="gOxqULfHdTLF"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="lSexNJnXcwjZ" transform="matrix(1 0 0 -1 -41 100)">
          <g
            id="JNlAPBQnDAyw"
            transform="translate(41.282 56.05)"
            fill="#005E72"
            fillRule="nonzero"
          >
            <path
              id="AJYAVVcUOrke"
              d="M49.984 14.62L36.316 6.664 25.052.107l-9.866 5.755L0 14.718l6.453 3.77 4.796 2.802 8.858 5.176 2.412-1.407-8.864-5.171 7.583-4.426 8.864 5.173 5.201-3.036 4.782 2.792 3.435-2.003z"
            />
          </g>
          <g
            id="tcoCWswKXjSO"
            transform="translate(41.282 62.55)"
            fill="#007C88"
            fillRule="nonzero"
          >
            <path
              id="CuQnlsHukdLk"
              d="M49.984 14.62L36.316 6.664 25.052.107l-9.866 5.755L0 14.718l6.453 3.77 4.796 2.802 8.858 5.176 2.412-1.407-8.864-5.171 7.583-4.427 8.864 5.174 5.201-3.036 4.782 2.792 3.435-2.003z"
            />
          </g>
          <g
            id="TfxMHDJmDRpz"
            transform="translate(41.214 70.087)"
            fill="#009E8F"
            fillRule="nonzero"
          >
            <path
              id="GyQUhkfOhAIW"
              d="M46.61 16.62l-5.202 3.033-7.587 4.42-4.926 2.872-3.949 2.302-4.336-2.533-6.885-4.023-8.858-5.175-4.798-2.803L4 12.42l2.521-1.47 2.402-1.4 7.585-4.425L21.71 2.09l3.412-1.99 4.801 2.796 8.876 5.166 4.79 2.787 2.107 1.226 4.358 2.537z"
            />
          </g>
          <g
            id="pJCYObSxuVEI"
            transform="translate(55.2 78.688)"
            fill="#FFF"
            fillRule="nonzero"
          >
            <path
              id="qMGrXmoQgKwS"
              d="M0 3.749L8.865 8.92 3.94 11.79l5.725 3.341 4.627-2.699L26.207 5.48l-5.723-3.34-5.2 3.036L6.418.002z"
            />
          </g>
          <g id="ihQfZfMZLYKt">
            <g id="WTfWoorkghOF">
              <mask id="zwSSlmCujgoL" fill="#fff">
                <use xlinkHref="#SmBMOlIKNNbB" />
              </mask>
              <g id="ILTdTpEHnMLO" mask="url(#zwSSlmCujgoL)">
                <g transform="translate(99.344 58.232)">
                  <g
                    id="AHewmFDNLngy"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                    transform="translate(.004 7.54)"
                  >
                    <path
                      d="M9.122 17.495V8.348c0-1.856 1.036-2.805 3.02-2.805 1.122 0 2.071.346 2.891.734v-5.22c-1.208-.648-2.46-.95-4.099-.95-5.048 0-7.42 2.934-7.42 7.335v10.053H.017v5.134h3.495v5.566h5.61v-5.566h5.91v-5.134h-5.91z"
                      id="hnrpcSFBEMOj"
                      data-testid="logo__path"
                      fill={fillColor}
                      fillRule="nonzero"
                    />
                  </g>
                  <g
                    id="lvcWhwycgsZY"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                    transform="translate(19.084 8.147)"
                  >
                    <path
                      d="M12.996 22.368v-5.781h-.95c-4.012 0-6.342-2.374-6.342-6.127V.019H.095v22.004h5.61v-2.848c1.596 2.028 3.753 3.193 6.342 3.193h.949z"
                      id="MbfLMkdmumna"
                      fill={fillColor}
                      fillRule="nonzero"
                    />
                  </g>
                  <path
                    d="M35.36 30.17h5.608V8.164H35.36V30.17zm-.734 6.73c0 1.985 1.553 3.495 3.538 3.495 1.984 0 3.538-1.51 3.538-3.495s-1.554-3.495-3.538-3.495c-1.985 0-3.538 1.51-3.538 3.495"
                    id="mYlFOguQneqz"
                    fill={fillColor}
                    fillRule="nonzero"
                  />
                  <g
                    id="UyDmAADHamwY"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                    transform="translate(42.43 .045)"
                  >
                    <path
                      d="M13.12 16.62c-2.632 0-4.571 1.855-4.571 4.358 0 2.501 1.94 4.358 4.572 4.358 2.588 0 4.574-1.857 4.574-4.358 0-2.503-1.986-4.358-4.574-4.358m10.442 16.826c-2.856 0-4.951-1.429-5.627-3.75-.011-.028-.018-.06-.027-.089a11.464 11.464 0 01-4.788 1.035c-5.91 0-10.313-4.142-10.313-9.664 0-1.7.41-3.255 1.157-4.601.04-.07.08-.138.123-.208a9.068 9.068 0 011.654-2.05 9.956 9.956 0 013.79-2.256c.361-.112.731-.208 1.11-.286.79-.167 1.614-.263 2.479-.263 1.267 0 2.47.194 3.577.553.683-.431 1.112-1.16 1.112-1.89 0-1.08-.95-1.857-2.33-1.857H8.317C3.96 8.12.854 5.703.12 1.648L5.9.094c.175 1.599 1.512 2.633 3.496 2.633h7.205c4.1 0 6.817 2.374 6.817 5.867 0 2.22-1.14 4.35-2.916 5.485 1.853 1.725 2.974 4.14 2.974 6.899 0 2.158-.691 4.142-1.9 5.696.217.992 1.124 1.596 2.245 1.596h1.554v5.176h-1.812z"
                      id="mxkxVwXIuwWT"
                      fill={fillColor}
                      fillRule="nonzero"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <title>{title}</title>
    </svg>
  );
};

Logo.propTypes = logoTypes;
Logo.defaultProps = defaultProps;

export default Logo;
