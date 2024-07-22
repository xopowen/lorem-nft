import React from 'react';
import Link from "next/link";

function Footer() {
    return (
        <footer className='bg-[var(--background---secondary)]
              flex flex-col lg:flex-row gap-10 lg:gap-[48px] py-10 lg:py-10
        px-[30px] md:px-18 lg:px-28
        '>
            <div className='grid gap-6'>
                <div className='flex gap-2'>
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29297 12.4492C6.84525 12.4492 7.29297 12.8969 7.29297 13.4492V25.9992H25.293V13.4492C25.293 12.8969 25.7407 12.4492 26.293 12.4492C26.8453 12.4492 27.293 12.8969 27.293 13.4492V25.9992C27.293 26.5296 27.0823 27.0384 26.7072 27.4134C26.3321 27.7885 25.8234 27.9992 25.293 27.9992H7.29297C6.76254 27.9992 6.25383 27.7885 5.87876 27.4134C5.50368 27.0384 5.29297 26.5297 5.29297 25.9992V13.4492C5.29297 12.8969 5.74068 12.4492 6.29297 12.4492Z" fill="#A259FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.29297 5C3.29297 4.44772 3.74068 4 4.29297 4H28.293C28.8453 4 29.293 4.44772 29.293 5C29.293 5.55228 28.8453 6 28.293 6H4.29297C3.74068 6 3.29297 5.55228 3.29297 5Z" fill="#A259FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29297 7C4.84525 7 5.29297 7.44772 5.29297 8V10C5.29297 10.7956 5.60904 11.5587 6.17165 12.1213C6.73426 12.6839 7.49732 13 8.29297 13C9.08862 13 9.85168 12.6839 10.4143 12.1213C10.9769 11.5587 11.293 10.7956 11.293 10V8C11.293 7.44772 11.7407 7 12.293 7C12.8453 7 13.293 7.44772 13.293 8V10C13.293 11.3261 12.7662 12.5979 11.8285 13.5355C10.8908 14.4732 9.61905 15 8.29297 15C6.96689 15 5.69512 14.4732 4.75743 13.5355C3.81975 12.5979 3.29297 11.3261 3.29297 10V8C3.29297 7.44772 3.74068 7 4.29297 7Z" fill="#A259FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.293 7C12.8453 7 13.293 7.44772 13.293 8V10C13.293 10.7956 13.609 11.5587 14.1716 12.1213C14.7343 12.6839 15.4973 13 16.293 13C17.0886 13 17.8517 12.6839 18.4143 12.1213C18.9769 11.5587 19.293 10.7956 19.293 10V8C19.293 7.44772 19.7407 7 20.293 7C20.8453 7 21.293 7.44772 21.293 8V10C21.293 11.3261 20.7662 12.5979 19.8285 13.5355C18.8908 14.4732 17.6191 15 16.293 15C14.9669 15 13.6951 14.4732 12.7574 13.5355C11.8198 12.5979 11.293 11.3261 11.293 10V8C11.293 7.44772 11.7407 7 12.293 7Z" fill="#A259FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.293 7C20.8453 7 21.293 7.44772 21.293 8V10C21.293 10.7956 21.609 11.5587 22.1716 12.1213C22.7343 12.6839 23.4973 13 24.293 13C25.0886 13 25.8517 12.6839 26.4143 12.1213C26.9769 11.5587 27.293 10.7956 27.293 10V8C27.293 7.44772 27.7407 7 28.293 7C28.8453 7 29.293 7.44772 29.293 8V10C29.293 11.3261 28.7662 12.5979 27.8285 13.5355C26.8908 14.4732 25.6191 15 24.293 15C22.9669 15 21.6951 14.4732 20.7574 13.5355C19.8198 12.5979 19.293 11.3261 19.293 10V8C19.293 7.44772 19.7407 7 20.293 7Z" fill="#A259FF" />
                    </svg>
                    <svg width="200" height="21" viewBox="0 0 200 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.77297 14.5476H8.16897V0.599609H11.073V15.9996H5.39697L3.59297 2.05161H3.19697V15.9996H0.292969V0.599609H5.96897L7.77297 14.5476Z" fill="white" />
                        <path d="M14.3577 0.599609H24.2137V3.37161H17.2617V6.89161H24.0817V9.66361H17.2617V15.9996H14.3577V0.599609Z" fill="white" />
                        <path d="M27.0804 0.599609H38.1684V3.37161H34.0764V15.9996H31.1724V3.37161H27.0804V0.599609Z" fill="white" />
                        <path d="M53.3178 0.599609H58.4218L59.3018 12.1716V14.4156H59.8298V12.1716L60.7098 0.599609H65.8138V15.9996H63.1738V5.70361L63.4378 2.18361H62.9098L61.7658 15.9996H57.4098L56.2218 2.18361H55.6938L55.9578 5.70361V15.9996H53.3178V0.599609Z" fill="white" />
                        <path d="M75.0825 14.4156C74.7891 15.1049 74.3785 15.5963 73.8505 15.8896C73.3225 16.1683 72.7065 16.3076 72.0025 16.3076C71.3425 16.3076 70.7192 16.1829 70.1325 15.9336C69.5605 15.6843 69.0545 15.3176 68.6145 14.8336C68.1745 14.3496 67.8225 13.7629 67.5585 13.0736C67.3091 12.3843 67.1845 11.5996 67.1845 10.7196V10.3676C67.1845 9.50228 67.3091 8.72494 67.5585 8.03561C67.8078 7.34628 68.1451 6.75961 68.5705 6.27561C68.9958 5.79161 69.4871 5.42494 70.0445 5.17561C70.6165 4.91161 71.2252 4.77961 71.8705 4.77961C72.6478 4.77961 73.2711 4.91161 73.7405 5.17561C74.2245 5.43961 74.6058 5.85028 74.8845 6.40761H75.2805V5.08761H78.0525V12.6996C78.0525 13.1396 78.2505 13.3596 78.6465 13.3596H79.0645V15.9996H77.1725C76.6738 15.9996 76.2632 15.8529 75.9405 15.5596C75.6325 15.2663 75.4785 14.8849 75.4785 14.4156H75.0825ZM72.6185 13.6676C73.4251 13.6676 74.0705 13.4036 74.5545 12.8756C75.0385 12.3329 75.2805 11.5996 75.2805 10.6756V10.4116C75.2805 9.48761 75.0385 8.76161 74.5545 8.23361C74.0705 7.69094 73.4251 7.41961 72.6185 7.41961C71.8118 7.41961 71.1665 7.69094 70.6825 8.23361C70.1985 8.76161 69.9565 9.48761 69.9565 10.4116V10.6756C69.9565 11.5996 70.1985 12.3329 70.6825 12.8756C71.1665 13.4036 71.8118 13.6676 72.6185 13.6676Z" fill="white" />
                        <path d="M80.9632 5.08761H85.5832V6.67161H85.9792C86.1845 6.07028 86.5292 5.60828 87.0132 5.28561C87.5118 4.94828 88.1059 4.77961 88.7952 4.77961C89.8805 4.77961 90.7532 5.12428 91.4132 5.81361C92.0732 6.48828 92.4032 7.52228 92.4032 8.91561V9.39961L89.5432 9.66361V9.35561C89.5432 8.75428 89.3892 8.27761 89.0812 7.92561C88.7732 7.55894 88.3112 7.37561 87.6952 7.37561C87.0792 7.37561 86.5952 7.58828 86.2432 8.01361C85.8912 8.43894 85.7152 9.04761 85.7152 9.83961V13.3596H88.2232V15.9996H80.6992V13.3596H82.9432V7.72761H80.9632V5.08761Z" fill="white" />
                        <path d="M98.6139 9.09161H99.1419L102.046 5.08761H105.082V5.21961L101.562 10.2136V10.6096L105.434 15.8676V15.9996H102.266L99.1419 11.7316H98.6139V15.9996H95.8419V0.599609H98.6139V9.09161Z" fill="white" />
                        <path d="M110.875 11.4456C110.889 11.7683 110.963 12.0689 111.095 12.3476C111.241 12.6116 111.432 12.8463 111.667 13.0516C111.916 13.2423 112.195 13.3963 112.503 13.5136C112.825 13.6163 113.163 13.6676 113.515 13.6676C114.204 13.6676 114.732 13.5503 115.099 13.3156C115.465 13.0663 115.729 12.7729 115.891 12.4356L118.267 13.7556C118.135 14.0343 117.951 14.3276 117.717 14.6356C117.482 14.9289 117.174 15.2003 116.793 15.4496C116.426 15.6989 115.971 15.9043 115.429 16.0656C114.901 16.2269 114.277 16.3076 113.559 16.3076C112.737 16.3076 111.989 16.1756 111.315 15.9116C110.64 15.6476 110.053 15.2663 109.555 14.7676C109.071 14.2689 108.689 13.6603 108.411 12.9416C108.147 12.2229 108.015 11.4089 108.015 10.4996V10.3676C108.015 9.53161 108.154 8.76894 108.433 8.07961C108.726 7.39028 109.122 6.80361 109.621 6.31961C110.119 5.83561 110.699 5.46161 111.359 5.19761C112.033 4.91894 112.752 4.77961 113.515 4.77961C114.453 4.77961 115.26 4.94828 115.935 5.28561C116.609 5.60828 117.167 6.02628 117.607 6.53961C118.047 7.03828 118.369 7.59561 118.575 8.21161C118.78 8.81294 118.883 9.39961 118.883 9.97161V11.4456H110.875ZM113.493 7.28761C112.789 7.28761 112.217 7.47094 111.777 7.83761C111.337 8.18961 111.051 8.60028 110.919 9.06961H116.067C115.979 8.55628 115.7 8.13094 115.231 7.79361C114.776 7.45628 114.197 7.28761 113.493 7.28761Z" fill="white" />
                        <path d="M121.595 5.08761H124.829V0.599609H127.601V5.08761H131.539V7.72761H127.601V12.6996C127.601 13.1396 127.799 13.3596 128.195 13.3596H131.143V15.9996H126.523C126.025 15.9996 125.614 15.8383 125.291 15.5156C124.983 15.1929 124.829 14.7823 124.829 14.2836V7.72761H121.595V5.08761Z" fill="white" />
                        <path d="M137.574 20.3996H134.802V5.08761H137.574V6.67161H137.97C138.263 6.07028 138.689 5.60828 139.246 5.28561C139.803 4.94828 140.515 4.77961 141.38 4.77961C142.025 4.77961 142.634 4.90428 143.206 5.15361C143.793 5.40294 144.299 5.76961 144.724 6.25361C145.164 6.72294 145.509 7.30228 145.758 7.99161C146.022 8.68094 146.154 9.46561 146.154 10.3456V10.7416C146.154 11.6363 146.029 12.4283 145.78 13.1176C145.531 13.8069 145.193 14.3936 144.768 14.8776C144.343 15.3469 143.837 15.7063 143.25 15.9556C142.678 16.1903 142.055 16.3076 141.38 16.3076C140.881 16.3076 140.449 16.2563 140.082 16.1536C139.715 16.0509 139.393 15.9116 139.114 15.7356C138.85 15.5596 138.623 15.3616 138.432 15.1416C138.256 14.9069 138.102 14.6649 137.97 14.4156H137.574V20.3996ZM140.478 13.6676C141.343 13.6676 142.04 13.4036 142.568 12.8756C143.111 12.3329 143.382 11.5996 143.382 10.6756V10.4116C143.382 9.48761 143.111 8.76161 142.568 8.23361C142.04 7.69094 141.343 7.41961 140.478 7.41961C139.613 7.41961 138.909 7.69828 138.366 8.25561C137.838 8.79828 137.574 9.51694 137.574 10.4116V10.6756C137.574 11.5703 137.838 12.2963 138.366 12.8536C138.909 13.3963 139.613 13.6676 140.478 13.6676Z" fill="white" />
                        <path d="M148.779 13.3596H152.607V3.23961H148.911V0.599609H155.379V13.3596H158.943V15.9996H148.779V13.3596Z" fill="white" />
                        <path d="M169.377 14.4156C169.084 15.1049 168.673 15.5963 168.145 15.8896C167.617 16.1683 167.001 16.3076 166.297 16.3076C165.637 16.3076 165.014 16.1829 164.427 15.9336C163.855 15.6843 163.349 15.3176 162.909 14.8336C162.469 14.3496 162.117 13.7629 161.853 13.0736C161.604 12.3843 161.479 11.5996 161.479 10.7196V10.3676C161.479 9.50228 161.604 8.72494 161.853 8.03561C162.103 7.34628 162.44 6.75961 162.865 6.27561C163.291 5.79161 163.782 5.42494 164.339 5.17561C164.911 4.91161 165.52 4.77961 166.165 4.77961C166.943 4.77961 167.566 4.91161 168.035 5.17561C168.519 5.43961 168.901 5.85028 169.179 6.40761H169.575V5.08761H172.347V12.6996C172.347 13.1396 172.545 13.3596 172.941 13.3596H173.359V15.9996H171.467C170.969 15.9996 170.558 15.8529 170.235 15.5596C169.927 15.2663 169.773 14.8849 169.773 14.4156H169.377ZM166.913 13.6676C167.72 13.6676 168.365 13.4036 168.849 12.8756C169.333 12.3329 169.575 11.5996 169.575 10.6756V10.4116C169.575 9.48761 169.333 8.76161 168.849 8.23361C168.365 7.69094 167.72 7.41961 166.913 7.41961C166.107 7.41961 165.461 7.69094 164.977 8.23361C164.493 8.76161 164.251 9.48761 164.251 10.4116V10.6756C164.251 11.5996 164.493 12.3329 164.977 12.8756C165.461 13.4036 166.107 13.6676 166.913 13.6676Z" fill="white" />
                        <path d="M186.434 11.9956C186.185 13.2863 185.591 14.3276 184.652 15.1196C183.728 15.9116 182.489 16.3076 180.934 16.3076C180.127 16.3076 179.372 16.1829 178.668 15.9336C177.979 15.6843 177.377 15.3249 176.864 14.8556C176.351 14.3863 175.947 13.8069 175.654 13.1176C175.361 12.4283 175.214 11.6436 175.214 10.7636V10.4996C175.214 9.61961 175.361 8.82761 175.654 8.12361C175.947 7.41961 176.351 6.81828 176.864 6.31961C177.392 5.82094 178.001 5.43961 178.69 5.17561C179.394 4.91161 180.142 4.77961 180.934 4.77961C182.459 4.77961 183.691 5.17561 184.63 5.96761C185.583 6.75961 186.185 7.80094 186.434 9.09161L183.706 9.79561C183.618 9.15028 183.339 8.59295 182.87 8.12361C182.401 7.65428 181.741 7.41961 180.89 7.41961C180.494 7.41961 180.12 7.49294 179.768 7.63961C179.416 7.78628 179.108 7.99894 178.844 8.27761C178.58 8.54161 178.367 8.87161 178.206 9.26761C178.059 9.64894 177.986 10.0816 177.986 10.5656V10.6976C177.986 11.1816 178.059 11.6143 178.206 11.9956C178.367 12.3623 178.58 12.6703 178.844 12.9196C179.108 13.1689 179.416 13.3596 179.768 13.4916C180.12 13.6089 180.494 13.6676 180.89 13.6676C181.741 13.6676 182.386 13.4549 182.826 13.0296C183.281 12.6043 183.574 12.0323 183.706 11.3136L186.434 11.9956Z" fill="white" />
                        <path d="M191.699 11.4456C191.713 11.7683 191.787 12.0689 191.919 12.3476C192.065 12.6116 192.256 12.8463 192.491 13.0516C192.74 13.2423 193.019 13.3963 193.327 13.5136C193.649 13.6163 193.987 13.6676 194.339 13.6676C195.028 13.6676 195.556 13.5503 195.923 13.3156C196.289 13.0663 196.553 12.7729 196.715 12.4356L199.091 13.7556C198.959 14.0343 198.775 14.3276 198.541 14.6356C198.306 14.9289 197.998 15.2003 197.617 15.4496C197.25 15.6989 196.795 15.9043 196.253 16.0656C195.725 16.2269 195.101 16.3076 194.383 16.3076C193.561 16.3076 192.813 16.1756 192.139 15.9116C191.464 15.6476 190.877 15.2663 190.379 14.7676C189.895 14.2689 189.513 13.6603 189.235 12.9416C188.971 12.2229 188.839 11.4089 188.839 10.4996V10.3676C188.839 9.53161 188.978 8.76894 189.257 8.07961C189.55 7.39028 189.946 6.80361 190.445 6.31961C190.943 5.83561 191.523 5.46161 192.183 5.19761C192.857 4.91894 193.576 4.77961 194.339 4.77961C195.277 4.77961 196.084 4.94828 196.759 5.28561C197.433 5.60828 197.991 6.02628 198.431 6.53961C198.871 7.03828 199.193 7.59561 199.399 8.21161C199.604 8.81294 199.707 9.39961 199.707 9.97161V11.4456H191.699ZM194.317 7.28761C193.613 7.28761 193.041 7.47094 192.601 7.83761C192.161 8.18961 191.875 8.60028 191.743 9.06961H196.891C196.803 8.55628 196.524 8.13094 196.055 7.79361C195.6 7.45628 195.021 7.28761 194.317 7.28761Z" fill="white" />
                    </svg>

                </div>
              <div className='font-second grid gap-5 text-base'>
                  <p className='text-[color:var(--ccc)]'>
                      NFT marketplace UI created with Anima for Figma.
                  </p>
                  <div className='grid gap-4'>
                      <p className='text-[color:var(--ccc)]'>Join our community</p>
                      <div className='flex gap-2.5'>
                          <a title='discord' href="#">
                              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12.293 19.5C13.1214 19.5 13.793 18.8284 13.793 18C13.793 17.1716 13.1214 16.5 12.293 16.5C11.4645 16.5 10.793 17.1716 10.793 18C10.793 18.8284 11.4645 19.5 12.293 19.5Z" fill="#858584" />
                                  <path d="M20.293 19.5C21.1214 19.5 21.793 18.8284 21.793 18C21.793 17.1716 21.1214 16.5 20.293 16.5C19.4645 16.5 18.793 17.1716 18.793 18C18.793 18.8284 19.4645 19.5 20.293 19.5Z" fill="#858584" />
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2856 10.0006C14.1178 9.98454 11.9608 10.3065 9.89211 10.9548C9.3651 11.12 8.80398 10.8267 8.63881 10.2997C8.47364 9.77266 8.76697 9.21154 9.29397 9.04637C11.5586 8.33661 13.9199 7.98379 16.293 8.00057C18.6662 7.98379 21.0275 8.33661 23.2921 9.04637C23.8191 9.21154 24.1124 9.77266 23.9473 10.2997C23.7821 10.8267 23.221 11.12 22.694 10.9548C20.6253 10.3065 18.4683 9.98454 16.3004 10.0006H16.2856Z" fill="#858584" />
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.63881 21.7012C8.80398 21.1742 9.3651 20.8809 9.89211 21.046C11.9608 21.6944 14.1178 22.0163 16.2856 22.0003H16.3004C18.4683 22.0163 20.6253 21.6944 22.694 21.046C23.221 20.8809 23.7821 21.1742 23.9473 21.7012C24.1124 22.2282 23.8191 22.7893 23.2921 22.9545C21.0275 23.6643 18.6662 24.0171 16.293 24.0003C13.9199 24.0171 11.5586 23.6643 9.29397 22.9545C8.76697 22.7893 8.47364 22.2282 8.63881 21.7012Z" fill="#858584" />
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5124 4.81024C20.9429 4.56754 21.4476 4.4917 21.9303 4.59714C23.2479 4.88268 24.5378 5.28326 25.7853 5.79426C26.0661 5.90254 26.3183 6.07398 26.5224 6.29541C26.7286 6.5192 26.88 6.78788 26.9645 7.08017L31.2003 21.2246C31.3108 21.593 31.3134 21.9855 31.2077 22.3554C31.102 22.7253 30.8925 23.0571 30.604 23.3116L30.5989 23.3161C28.5314 25.1151 25.73 26.4767 22.5481 27.2567C22.1061 27.3694 21.6387 27.3256 21.2252 27.1326C20.8134 26.9404 20.4806 26.6122 20.2828 26.2035L18.7745 23.2119C18.5259 22.7188 18.7241 22.1174 19.2173 21.8688C19.7104 21.6202 20.3118 21.8184 20.5604 22.3115L22.0729 25.3115L22.074 25.3137C25.0119 24.5933 27.506 23.3562 29.286 21.8073L29.9425 22.5617L29.2809 21.8119C29.2827 21.8103 29.284 21.8082 29.2846 21.8059C29.2853 21.8036 29.2853 21.8012 29.2846 21.7989L25.0485 7.65368C25.045 7.65227 25.0414 7.65084 25.0379 7.64939C23.895 7.18051 22.713 6.81314 21.5057 6.55155L21.5035 6.55107C21.5005 6.55042 21.4974 6.55089 21.4947 6.5524C21.4923 6.55375 21.4904 6.55587 21.4893 6.5584L20.5044 9.53807C20.3311 10.0625 19.7655 10.347 19.2411 10.1737C18.7167 10.0004 18.4322 9.43476 18.6055 8.91038L19.5959 5.91419C19.7554 5.44609 20.0817 5.05312 20.5124 4.81024Z" fill="#858584" />
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0912 6.5524C11.0885 6.55089 11.0854 6.55042 11.0824 6.55107L11.0802 6.55155C9.87285 6.81314 8.69089 7.18051 7.54798 7.64939C7.54446 7.65084 7.54092 7.65227 7.53737 7.65368L3.30139 21.7986C3.30071 21.8009 3.30061 21.8036 3.30126 21.8059C3.30185 21.808 3.30297 21.8099 3.30449 21.8114C5.08418 23.3583 7.57657 24.5939 10.5119 25.3137L10.513 25.3115L12.0255 22.3115C12.2741 21.8184 12.8755 21.6202 13.3686 21.8688C13.8618 22.1174 14.06 22.7188 13.8114 23.2119L12.3031 26.2035C12.1052 26.6122 11.7724 26.9404 11.3607 27.1326C10.9472 27.3256 10.4798 27.3694 10.0378 27.2567C6.85584 26.4767 4.05447 25.1151 1.98701 23.3161L1.98183 23.3116C1.69336 23.0571 1.4839 22.7252 1.37821 22.3554C1.27256 21.9856 1.27508 21.5932 1.38546 21.2248C1.38543 21.2249 1.38549 21.2248 1.38546 21.2248L5.62136 7.08019C5.70588 6.78789 5.85723 6.51921 6.06348 6.29541C6.26754 6.07398 6.51976 5.90254 6.80056 5.79426C8.04843 5.28312 9.33874 4.88246 10.6567 4.5969C11.1391 4.49181 11.6433 4.56772 12.0735 4.81024C12.5042 5.05312 12.8305 5.4461 12.99 5.9142L12.9929 5.92287L13.9804 8.91038C14.1537 9.43476 13.8692 10.0004 13.3448 10.1737C12.8204 10.347 12.2548 10.0624 12.0815 9.53807L11.0965 6.55839C11.0955 6.55586 11.0936 6.55375 11.0912 6.5524Z" fill="#858584" />
                                  <path d="M12.293 19.5C13.1214 19.5 13.793 18.8284 13.793 18C13.793 17.1716 13.1214 16.5 12.293 16.5C11.4645 16.5 10.793 17.1716 10.793 18C10.793 18.8284 11.4645 19.5 12.293 19.5Z" fill="#858584" />
                                  <path d="M20.293 19.5C21.1214 19.5 21.793 18.8284 21.793 18C21.793 17.1716 21.1214 16.5 20.293 16.5C19.4645 16.5 18.793 17.1716 18.793 18C18.793 18.8284 19.4645 19.5 20.293 19.5Z" fill="#858584" />
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2856 10.0006C14.1178 9.98454 11.9608 10.3065 9.89211 10.9548C9.3651 11.12 8.80398 10.8267 8.63881 10.2997C8.47364 9.77266 8.76697 9.21154 9.29397 9.04637C11.5586 8.33661 13.9199 7.98379 16.293 8.00057C18.6662 7.98379 21.0275 8.33661 23.2921 9.04637C23.8191 9.21154 24.1124 9.77266 23.9473 10.2997C23.7821 10.8267 23.221 11.12 22.694 10.9548C20.6253 10.3065 18.4683 9.98454 16.3004 10.0006H16.2856Z" fill="#858584" />
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.63881 21.7012C8.80398 21.1742 9.3651 20.8809 9.89211 21.046C11.9608 21.6944 14.1178 22.0163 16.2856 22.0003H16.3004C18.4683 22.0163 20.6253 21.6944 22.694 21.046C23.221 20.8809 23.7821 21.1742 23.9473 21.7012C24.1124 22.2282 23.8191 22.7893 23.2921 22.9545C21.0275 23.6643 18.6662 24.0171 16.293 24.0003C13.9199 24.0171 11.5586 23.6643 9.29397 22.9545C8.76697 22.7893 8.47364 22.2282 8.63881 21.7012Z" fill="#858584" />
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5124 4.81024C20.9429 4.56754 21.4476 4.4917 21.9303 4.59714C23.2479 4.88268 24.5378 5.28326 25.7853 5.79426C26.0661 5.90254 26.3183 6.07398 26.5224 6.29541C26.7286 6.5192 26.88 6.78788 26.9645 7.08017L31.2003 21.2246C31.3108 21.593 31.3134 21.9855 31.2077 22.3554C31.102 22.7253 30.8925 23.0571 30.604 23.3116L30.5989 23.3161C28.5314 25.1151 25.73 26.4767 22.5481 27.2567C22.1061 27.3694 21.6387 27.3256 21.2252 27.1326C20.8134 26.9404 20.4806 26.6122 20.2828 26.2035L18.7745 23.2119C18.5259 22.7188 18.7241 22.1174 19.2173 21.8688C19.7104 21.6202 20.3118 21.8184 20.5604 22.3115L22.0729 25.3115L22.074 25.3137C25.0119 24.5933 27.506 23.3562 29.286 21.8073L29.9425 22.5617L29.2809 21.8119C29.2827 21.8103 29.284 21.8082 29.2846 21.8059C29.2853 21.8036 29.2853 21.8012 29.2846 21.7989L25.0485 7.65368C25.045 7.65227 25.0414 7.65084 25.0379 7.64939C23.895 7.18051 22.713 6.81314 21.5057 6.55155L21.5035 6.55107C21.5005 6.55042 21.4974 6.55089 21.4947 6.5524C21.4923 6.55375 21.4904 6.55587 21.4893 6.5584L20.5044 9.53807C20.3311 10.0625 19.7655 10.347 19.2411 10.1737C18.7167 10.0004 18.4322 9.43476 18.6055 8.91038L19.5959 5.91419C19.7554 5.44609 20.0817 5.05312 20.5124 4.81024Z" fill="#858584" />
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0912 6.5524C11.0885 6.55089 11.0854 6.55042 11.0824 6.55107L11.0802 6.55155C9.87285 6.81314 8.69089 7.18051 7.54798 7.64939C7.54446 7.65084 7.54092 7.65227 7.53737 7.65368L3.30139 21.7986C3.30071 21.8009 3.30061 21.8036 3.30126 21.8059C3.30185 21.808 3.30297 21.8099 3.30449 21.8114C5.08418 23.3583 7.57657 24.5939 10.5119 25.3137L10.513 25.3115L12.0255 22.3115C12.2741 21.8184 12.8755 21.6202 13.3686 21.8688C13.8618 22.1174 14.06 22.7188 13.8114 23.2119L12.3031 26.2035C12.1052 26.6122 11.7724 26.9404 11.3607 27.1326C10.9472 27.3256 10.4798 27.3694 10.0378 27.2567C6.85584 26.4767 4.05447 25.1151 1.98701 23.3161L1.98183 23.3116C1.69336 23.0571 1.4839 22.7252 1.37821 22.3554C1.27256 21.9856 1.27508 21.5932 1.38546 21.2248C1.38543 21.2249 1.38549 21.2248 1.38546 21.2248L5.62136 7.08019C5.70588 6.78789 5.85723 6.51921 6.06348 6.29541C6.26754 6.07398 6.51976 5.90254 6.80056 5.79426C8.04843 5.28312 9.33874 4.88246 10.6567 4.5969C11.1391 4.49181 11.6433 4.56772 12.0735 4.81024C12.5042 5.05312 12.8305 5.4461 12.99 5.9142L12.9929 5.92287L13.9804 8.91038C14.1537 9.43476 13.8692 10.0004 13.3448 10.1737C12.8204 10.347 12.2548 10.0624 12.0815 9.53807L11.0965 6.55839C11.0955 6.55586 11.0936 6.55375 11.0912 6.5524Z" fill="#858584" />
                              </svg>

                          </a>
                         <a title='youTube' href="#">
                              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8211 11.1183C14.1463 10.9443 14.5408 10.9634 14.8477 11.168L20.8477 15.168C21.1259 15.3534 21.293 15.6656 21.293 16C21.293 16.3344 21.1259 16.6466 20.8477 16.8321L14.8477 20.8321C14.5408 21.0366 14.1463 21.0557 13.8211 20.8817C13.496 20.7077 13.293 20.3688 13.293 20V12C13.293 11.6312 13.496 11.2923 13.8211 11.1183ZM15.293 13.8685V18.1315L18.4902 16L15.293 13.8685Z" fill="#858584" />
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2915 5.05082L16.2746 5.05078L16.2118 5.05081C16.1573 5.05093 16.0779 5.05133 15.9761 5.05241C15.7724 5.05457 15.4786 5.05947 15.1136 5.07043C14.3841 5.09232 13.3675 5.13847 12.2167 5.23563C9.9403 5.42782 7.04225 5.82669 4.81105 6.6792L4.79635 6.68495C4.35808 6.86039 3.96717 7.13637 3.65515 7.49064C3.34313 7.84491 3.11874 8.26755 3.00008 8.72447L2.99911 8.72824C2.6877 9.9468 2.29297 12.2065 2.29297 16.0008C2.29297 19.7952 2.6877 22.0549 2.99911 23.2734L3.00008 23.2772C3.11874 23.7341 3.34313 24.1568 3.65515 24.511C3.96717 24.8653 4.35807 25.1413 4.79635 25.3167L4.81105 25.3225C7.04225 26.175 9.9403 26.5739 12.2167 26.766C13.3675 26.8632 14.3841 26.9094 15.1136 26.9312C15.4786 26.9422 15.7724 26.9471 15.9761 26.9493C16.0779 26.9504 16.1573 26.9507 16.2118 26.9509L16.2746 26.9509L16.2915 26.9509H16.2945L16.3113 26.9509L16.3741 26.9509C16.4286 26.9507 16.508 26.9504 16.6099 26.9493C16.8135 26.9471 17.1074 26.9422 17.4724 26.9312C18.2018 26.9094 19.2184 26.8632 20.3693 26.766C22.6456 26.5739 25.5437 26.175 27.7749 25.3225L27.7896 25.3167C28.2279 25.1413 28.6188 24.8653 28.9308 24.511C29.2428 24.1568 29.4672 23.7341 29.5859 23.2772L29.5868 23.2734C29.8982 22.0549 30.293 19.7952 30.293 16.0008C30.293 12.2065 29.8982 9.9468 29.5868 8.72824L29.5859 8.72447C29.4672 8.26755 29.2428 7.84491 28.9308 7.49064C28.6188 7.13637 28.2279 6.86039 27.7896 6.68495L27.7749 6.6792C25.5437 5.82669 22.6456 5.42782 20.3693 5.23563C19.2184 5.13847 18.2018 5.09232 17.4724 5.07043C17.1074 5.05947 16.8135 5.05457 16.6099 5.05241C16.508 5.05133 16.4286 5.05093 16.3741 5.05081L16.3113 5.05078L16.2945 5.05082H16.2915ZM16.2877 24.9509L16.2984 24.9508L16.3016 24.9509L16.3147 24.9509L16.3697 24.9509C16.4188 24.9508 16.4926 24.9504 16.5886 24.9494C16.7807 24.9473 17.0616 24.9427 17.4124 24.9321C18.1146 24.9111 19.0941 24.8666 20.201 24.7731C22.4371 24.5843 25.0971 24.2028 27.0526 23.4574C27.1974 23.3984 27.3265 23.3066 27.4299 23.1892C27.5344 23.0705 27.6097 22.929 27.6497 22.7761C27.9132 21.7438 28.293 19.6539 28.293 16.0008C28.293 12.3478 27.9132 10.2578 27.6497 9.22562C27.6097 9.07265 27.5344 8.93117 27.4299 8.81251C27.3265 8.69512 27.1974 8.60331 27.0526 8.54424C25.0971 7.79889 22.4371 7.41733 20.201 7.22854C19.0941 7.13509 18.1146 7.09061 17.4124 7.06953C17.0616 7.059 16.7807 7.05433 16.5886 7.0523C16.4926 7.05128 16.4188 7.05092 16.3697 7.05081L16.3147 7.05078L16.3016 7.05081L16.2987 7.05082L16.2876 7.05088L16.2844 7.05081L16.2713 7.05078L16.2163 7.05081C16.1671 7.05092 16.0933 7.05128 15.9973 7.0523C15.8052 7.05433 15.5244 7.059 15.1736 7.06953C14.4713 7.09061 13.4918 7.13509 12.3849 7.22854C10.1489 7.41733 7.48887 7.79889 5.53336 8.54424C5.38858 8.60331 5.25942 8.69513 5.15603 8.81251C5.05152 8.93117 4.97626 9.07265 4.93627 9.22562C4.6727 10.2578 4.29297 12.3478 4.29297 16.0008C4.29297 19.6539 4.6727 21.7438 4.93627 22.7761C4.97626 22.929 5.05152 23.0705 5.15603 23.1892C5.25942 23.3066 5.38857 23.3984 5.53335 23.4574C7.48886 24.2028 10.1489 24.5843 12.3849 24.7731C13.4918 24.8666 14.4713 24.9111 15.1736 24.9321C15.5244 24.9427 15.8052 24.9473 15.9973 24.9494C16.0933 24.9504 16.1671 24.9508 16.2163 24.9509L16.2713 24.9509L16.2844 24.9509L16.2877 24.9509Z" fill="#858584" />
                              </svg>
                          </a>
                          <a title='twiter' href="#">
                              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M16.2927 11.0005C16.2927 8.25045 18.6052 5.96295 21.3552 6.00045C22.3182 6.01157 23.2576 6.3006 24.0603 6.8328C24.863 7.365 25.495 8.11771 25.8802 9.00045H30.2927L26.2552 13.038C25.9946 17.0937 24.1993 20.8979 21.2342 23.6773C18.269 26.4566 14.3567 28.0025 10.2927 28.0005C6.29267 28.0005 5.29267 26.5005 5.29267 26.5005C5.29267 26.5005 9.29267 25.0005 11.2927 22.0005C11.2927 22.0005 3.29267 18.0005 5.29267 7.00045C5.29267 7.00045 10.2927 12.0005 16.2927 13.0005V11.0005Z" stroke="#858584" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                          </a>
                          <a title='instagram' href="#">
                              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.293 12C14.0838 12 12.293 13.7909 12.293 16C12.293 18.2091 14.0838 20 16.293 20C18.5021 20 20.293 18.2091 20.293 16C20.293 13.7909 18.5021 12 16.293 12ZM10.293 16C10.293 12.6863 12.9793 10 16.293 10C19.6067 10 22.293 12.6863 22.293 16C22.293 19.3137 19.6067 22 16.293 22C12.9793 22 10.293 19.3137 10.293 16Z" fill="#858584" />
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.793 5.5C8.03154 5.5 5.79297 7.73858 5.79297 10.5V21.5C5.79297 24.2614 8.03154 26.5 10.793 26.5H21.793C24.5544 26.5 26.793 24.2614 26.793 21.5V10.5C26.793 7.73858 24.5544 5.5 21.793 5.5H10.793ZM3.79297 10.5C3.79297 6.63401 6.92698 3.5 10.793 3.5H21.793C25.659 3.5 28.793 6.63401 28.793 10.5V21.5C28.793 25.366 25.659 28.5 21.793 28.5H10.793C6.92698 28.5 3.79297 25.366 3.79297 21.5V10.5Z" fill="#858584" />
                                  <path d="M22.793 11C23.6214 11 24.293 10.3284 24.293 9.5C24.293 8.67157 23.6214 8 22.793 8C21.9645 8 21.293 8.67157 21.293 9.5C21.293 10.3284 21.9645 11 22.793 11Z" fill="#858584" />
                              </svg>
                          </a>
                      </div>
                  </div>
              </div>
            </div>
            <div className='grid gap-6'>
                <p className='font-main font-bold text-[22px]'>
                    Explore
                </p>
                        <nav itemScope itemType="http://schema.org/SiteNavigationElement">
                            <ul itemScope itemType='http://schema.org/ItemList'
                            className='grid gap-5  text-[color:var(--ccc)] whitespace-nowrap'
                            >
                                <li itemProp="itemListElement" itemScope  itemType="http://schema.org/ItemList">
                                    <Link itemProp="url" href="">Marketplace</Link>
                                    <meta itemProp="name" content=""/>
                                </li>
                                <li itemProp="itemListElement" itemScope  itemType="http://schema.org/ItemList">
                                    <Link itemProp="url" href="">Rankings</Link>
                                    <meta itemProp="name" content=""/>
                                </li>
                                <li itemProp="itemListElement" itemScope  itemType="http://schema.org/ItemList">
                                    <Link itemProp="url" href="">Connect a wallet</Link>
                                    <meta itemProp="name" content=""/>
                                </li>
                            </ul>
                        </nav>
            </div>
            <div className='grid gap-6'>

                <div className='text-[var(--text)] grid gap-2.5 '>
                    <h2 className='text-[28px]  font-bold font-main
                    tracking-wide
                    '>Join our weekly digest</h2>
                    <p
                        className='text-base   font-second text-[color:var(--ccc)]'
                    >Get exclusive promotions & updates straight to your inbox.</p>
                </div>
                <form action="#" className='flex flex-col md:flex-row justify-between
                gap-4 md:gap-0 md:h-[60px]
                md:rounded-[20px] md:bg-[var(--text)] h-min'>
                    <label  className='rounded-[20px] bg-[var(--text)]
                    py-4 px-5 md:w-full
                    '>
                        <input className='
                        bg-transparent
                        text-[color:var(--background)]
                        placeholder:text-base placeholder:text-[color:var(--background)]
                        w-full
                        '
                               placeholder='Enter Your Email Address'
                               type="email"/>
                    </label>
                    <button type="submit"  className='btn w-full md:w-auto
                    md:px-12 flex gap-2.5
                    bg-[var(--call-to-action)]
                    py-3 lg:py-0
                    text-base
                    '>
                        <svg className='w-5 h-5 max-w-5' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.375 4.375C2.375 4.02982 2.65482 3.75 3 3.75H18C18.3452 3.75 18.625 4.02982 18.625 4.375V15C18.625 15.3315 18.4933 15.6495 18.2589 15.8839C18.0245 16.1183 17.7065 16.25 17.375 16.25H3.625C3.29348 16.25 2.97554 16.1183 2.74112 15.8839C2.5067 15.6495 2.375 15.3315 2.375 15V4.375ZM3.625 5V15H17.375V5H3.625Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.53928 3.95268C2.77253 3.69823 3.16788 3.68104 3.42233 3.91428L10.5 10.4021L17.5777 3.91428C17.8321 3.68104 18.2275 3.69823 18.4607 3.95268C18.694 4.20713 18.6768 4.60248 18.4223 4.83573L10.9223 11.7107C10.6834 11.9298 10.3166 11.9298 10.0777 11.7107L2.57768 4.83573C2.32323 4.60248 2.30604 4.20713 2.53928 3.95268Z" fill="white" />
                        </svg>
                        Subscribe
                    </button>
                </form>

            </div>
        </footer>
    );
}

export default Footer;