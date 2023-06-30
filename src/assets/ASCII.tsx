import styled from "styled-components";
import constants from "styles/constants";

const StyledPre = styled.pre`
    color: ${constants.colors.textActiveBlue};
    text-shadow: 0px 0px 34px 0px #00e1ff7f, 0px 24px 220px 0px #00e1ff;

    font-size: 9px;
    font-weight: 500;
    line-height: 9px;
    letter-spacing: -0.18px;
    z-index: 1000;
`;

const SecurityLab = [
    "       ...                                                             .         s                       ...                        ..    ",
    '   .x888888hx    :                                                    @88>      :8      ..           .zf"` `"tu               . uW8"      ',
    "  d88888888888hxx                          x.    .        .u    .     %8P      .88     @L           x88      '8N.             `t888       ",
    ' 8" ... `"*8888%`       .u          .    .@88k  z88u    .d88B :@8c     .      :888ooo 9888i   .dL   888k     d88&       u      8888   .   ',
    '!  "   ` .xnxx.      ud8888.   .udR88N  ~"8888 ^8888   ="8888f8888r  .@88u  -*8888888 `Y888k:*888.  8888N.  @888F    us888u.   9888.z88N  ',
    `X X   .H8888888%:  :888'8888. <888'888k   8888  888R     4888>'88"  ''888E\`   8888      888E  888I  \`88888 9888%  .@88 "8888"  9888  888E `,
    `X 'hn8888888*"   > d888 '88%" 9888 'Y"    8888  888R     4888> '      888E    8888      888E  888I    %888 "88F   9888  9888   9888  888E `,
    'X: `*88888%`     ! 8888.+"    9888        8888  888R     4888>        888E    8888      888E  888I     8"   "*h=~ 9888  9888   9888  888E ',
    "'8h.. ``     ..x8> 8888L      9888        8888 ,888B .  .d888L .+     888E   .8888Lu=   888E  888I   z8Weu        9888  9888   9888  888E ",
    ` \`88888888888888f  '8888c. .+ ?8888u../  "8888Y 8888"   ^"8888*"      888&   ^%888*    x888N><888'  ""88888i.   Z 9888  9888  .8888  888" `,
    ' `88888888888888f  \'8888c. .+ ?8888u../  "8888Y 8888"   ^"8888*"      888&   ^%888*    x888N><888\'  ""88888i.   Z 9888  9888  .8888  888" ',
    `  '%8888888888*"    "88888%    "8888P'    \`Y"   'YP        "Y"        R888"    'Y"      "88"  888  "   "8888888*  "888*""888"  \`%888*%"   `,
    '     ^"****""`        "YP\'       "P\'                                   ""                     88F        ^"**""    ^Y"   ^Y\'      "`      ',
    '                                                                                             98"                                          ',
    '                                                                                           ./"                                            ',
];

const SecurityLabASCII: React.FC = () => {
    function printAsciiArt(artArray: string[]) {
        const asciiArt = artArray.join("\n");
        return asciiArt;
    }

    return <StyledPre>{printAsciiArt(SecurityLab)}</StyledPre>;
};

export { SecurityLabASCII };
