import React, { useState } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { colors } from '@/styles/colors';
import { useRouter } from 'expo-router';
import { View, StyleSheet, ColorSchemeName, TouchableOpacity, Text, ScrollView, LayoutChangeEvent, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import ProgressBar from '@/components/ProgressBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Spacer } from '@/components/Spacer';
import { BlueButton } from '@/components/ui/BlueButton';
import { SelectableOption } from '@/components/ui/SelectableOption';
import lessonStyles from '@/styles/lessonStyles';
import typography from '@/styles/typography';
import { AnswerButton } from '@/components/ui/AnswerButton';
import { GreenButton } from '@/components/ui/GreenButton';
import { RedButton } from '@/components/ui/RedButton';

  const Quest1 = ({ onNext }: { onNext: () => void }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
    const [isAnswerShown, setIsAnswerShown] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null); 
    const [correctAnswerMessage, setCorrectAnswerMessage] = useState<string | null>(null); 

    const handleAnswerButtonPress = () => {
        if (selectedOption === 'str') {
            setIsCorrect(true);
            setCorrectAnswerMessage(null);
        } else {
            setIsCorrect(false);
            setCorrectAnswerMessage('str'); 
        }
        setIsAnswerShown(true); 
    };

    const getColor = () => {
        if (isCorrect) {
            return colorScheme === 'dark' ? colors.green[400] : colors.green[400];
        } else {
            return colorScheme === 'dark' ? colors.red[400] : colors.red[450];
        }
    };

    return (
        <View style={[lessonStyles(colorScheme).beginScreenContainer]}>
            <View style={lessonStyles(colorScheme).topbox}>
                <Text style={typography(colorScheme).highLightText}>
                    Qual tipo de dado é utilizado para armazenar uma sequência de caracteres em Python?
                </Text>
            </View>

            <View style={lessonStyles(colorScheme).middlebox}>
                <View style={lessonStyles(colorScheme).optionsGrid}>
                    <View style={{ height: 80, width: '48%', marginBottom: 20 }}>
                        <AnswerButton
                            text="text"
                            isSelected={selectedOption === 'text'}
                            onSelect={() => !isAnswerShown && setSelectedOption('text')}  
                            disabled={isAnswerShown}  
                        />
                    </View>

                    <View style={{ height: 80, width: '48%', marginBottom: 20 }}>
                        <AnswerButton
                            text="string"
                            isSelected={selectedOption === 'string'}
                            onSelect={() => !isAnswerShown && setSelectedOption('string')}  
                            disabled={isAnswerShown} 
                        />
                    </View>

                    <View style={{ height: 80, width: '48%', marginBottom: 20 }}>
                        <AnswerButton
                            text="str"
                            isSelected={selectedOption === 'str'}
                            onSelect={() => !isAnswerShown && setSelectedOption('str')}  
                            disabled={isAnswerShown}  
                        />
                    </View>

                    <View style={{ height: 80, width: '48%', marginBottom: 20 }}>
                        <AnswerButton
                            text="char"
                            isSelected={selectedOption === 'char'}
                            onSelect={() => !isAnswerShown && setSelectedOption('char')}  
                            disabled={isAnswerShown}  
                        />
                    </View>
                </View>
            </View>

            <View style={lessonStyles(colorScheme).bottombox}>
                <Spacer height={20} />
                {isAnswerShown ? (
                    <View>
                        <View style={lessonStyles(colorScheme).feedbackTitleRow}>
                            <Ionicons
                                name={isCorrect === true ? 'checkmark-circle' : isCorrect === false ? 'close-circle' : ''}
                                size={27}
                                color={getColor()} 
                            />
                            <Text style={[lessonStyles(colorScheme).feedbackTitle, { color: getColor() }]}>
                                {isCorrect === true
                                    ? 'Parabéns!'
                                    : isCorrect === false
                                    ? 'Não foi dessa vez'
                                    : ''}
                            </Text>
                        </View>

                        {isCorrect === false && (
                            <View>
                                <Spacer height={10}></Spacer>
                                <Text style={[lessonStyles(colorScheme).feedbackText, { color: getColor() }]}>
                                    Resposta Correta:
                                </Text>
                                <Spacer height={10}></Spacer>
                                <Text style={[lessonStyles(colorScheme).CorretAnswer, { color: getColor() }]}>
                                    {correctAnswerMessage}
                                </Text>
                            </View>
                        )}
                        <Spacer height={30}></Spacer>
                        {isCorrect ? (
                            <GreenButton title="EBAA!" onPress={onNext} isLoading={isLoading} />
                        ) : (
                            <RedButton title="AHH, QUASE!" onPress={onNext} isLoading={isLoading} />
                        )}
                    </View>
                ) : (
                    <BlueButton
                        title="RESPONDER"
                        onPress={handleAnswerButtonPress}
                        isLoading={isLoading}
                        disabled={!selectedOption}
                    />
                )}
            </View>
        </View>
    );
};

const Quest2 = ({ onNext }: { onNext: () => void }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
    const [isAnswerShown, setIsAnswerShown] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null); 
    const [correctAnswerMessage, setCorrectAnswerMessage] = useState<string | null>(null); 

    const handleAnswerButtonPress = () => {
        if (selectedOption === 'True') {
            setIsCorrect(true);
            setCorrectAnswerMessage(null);
        } else {
            setIsCorrect(false);
            setCorrectAnswerMessage('True'); 
        }
        setIsAnswerShown(true); 
    };

    const getColor = () => {
        if (isCorrect) {
            return colorScheme === 'dark' ? colors.green[400] : colors.green[400];
        } else {
            return colorScheme === 'dark' ? colors.red[400] : colors.red[450];
        }
    };

    return (
        <View style={[lessonStyles(colorScheme).beginScreenContainer]}>
            <View style={lessonStyles(colorScheme).topbox}>
                <Text style={typography(colorScheme).highLightText}>
                    Qual é o valor retornado por uma comparação de igualdade entre dois valores iguais?
                </Text>
            </View>

            <View style={lessonStyles(colorScheme).middlebox}>
                <View style={lessonStyles(colorScheme).optionsGrid}>
                    <View style={{ height: 80, width: '48%', marginBottom: 20 }}>
                        <AnswerButton
                            text="1"
                            isSelected={selectedOption === '1'}
                            onSelect={() => !isAnswerShown && setSelectedOption('1')}  
                            disabled={isAnswerShown}  
                        />
                    </View>

                    <View style={{ height: 80, width: '48%', marginBottom: 20 }}>
                        <AnswerButton
                            text="True"
                            isSelected={selectedOption === 'True'}
                            onSelect={() => !isAnswerShown && setSelectedOption('True')}  
                            disabled={isAnswerShown} 
                        />
                    </View>

                    <View style={{ height: 80, width: '48%', marginBottom: 20 }}>
                        <AnswerButton
                            text="yes"
                            isSelected={selectedOption === 'yes'}
                            onSelect={() => !isAnswerShown && setSelectedOption('yes')}  
                            disabled={isAnswerShown}  
                        />
                    </View>

                    <View style={{ height: 80, width: '48%', marginBottom: 20 }}>
                        <AnswerButton
                            text="False"
                            isSelected={selectedOption === 'False'}
                            onSelect={() => !isAnswerShown && setSelectedOption('False')}  
                            disabled={isAnswerShown}  
                        />
                    </View>
                </View>
            </View>

            <View style={lessonStyles(colorScheme).bottombox}>
                <Spacer height={20} />
                {isAnswerShown ? (
                    <View>
                        <View style={lessonStyles(colorScheme).feedbackTitleRow}>
                            <Ionicons
                                name={isCorrect === true ? 'checkmark-circle' : isCorrect === false ? 'close-circle' : ''}
                                size={27}
                                color={getColor()} 
                            />
                            <Text style={[lessonStyles(colorScheme).feedbackTitle, { color: getColor() }]} >
                                {isCorrect === true
                                    ? 'Parabéns!'
                                    : isCorrect === false
                                    ? 'Não foi dessa vez'
                                    : ''}
                            </Text>
                        </View>

                        {isCorrect === false && (
                            <View>
                                <Spacer height={10}></Spacer>
                                <Text style={[lessonStyles(colorScheme).feedbackText, { color: getColor() }]} >
                                    Resposta Correta:
                                </Text>
                                <Spacer height={10}></Spacer>
                                <Text style={[lessonStyles(colorScheme).CorretAnswer, { color: getColor() }]} >
                                    {correctAnswerMessage}
                                </Text>
                            </View>
                        )}
                        <Spacer height={30}></Spacer>
                        {isCorrect ? (
                            <GreenButton title="EBAA!" onPress={onNext} isLoading={isLoading} />
                        ) : (
                            <RedButton title="AHH, QUASE!" onPress={onNext} isLoading={isLoading} />
                        )}
                    </View>
                ) : (
                    <BlueButton
                        title="RESPONDER"
                        onPress={handleAnswerButtonPress}
                        isLoading={isLoading}
                        disabled={!selectedOption}
                    />
                )}
            </View>
        </View>
    );
};

const Quest3 = ({ onNext }: { onNext: () => void }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
    const [isAnswerShown, setIsAnswerShown] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null); 
    const [correctAnswerMessage, setCorrectAnswerMessage] = useState<string | null>(null); 

    const handleAnswerButtonPress = () => {
        if (selectedOption === '#') {
            setIsCorrect(true);
            setCorrectAnswerMessage(null);
        } else {
            setIsCorrect(false);
            setCorrectAnswerMessage('# Morango'); 
        }
        setIsAnswerShown(true); 
    };

    const getColor = () => {
        if (isCorrect) {
            return colorScheme === 'dark' ? colors.green[400] : colors.green[400];
        } else {
            return colorScheme === 'dark' ? colors.red[400] : colors.red[450];
        }
    };

    return (
        <View style={[lessonStyles(colorScheme).beginScreenContainer]}>
            <View style={lessonStyles(colorScheme).topbox}>
                <Text style={typography(colorScheme).highLightText}>
                    Qual comentário esta correto?
                </Text>
            </View>

            <View style={lessonStyles(colorScheme).middlebox}>
                <View style={lessonStyles(colorScheme).optionsGrid}>
                    <View style={{ height: 80, width: '48%', marginBottom: 20 }}>
                        <AnswerButton
                            text="# Morango"
                            isSelected={selectedOption === '#'}
                            onSelect={() => !isAnswerShown && setSelectedOption('#')}  
                            disabled={isAnswerShown}  
                        />
                    </View>

                    <View style={{ height: 80, width: '48%', marginBottom: 20 }}>
                        <AnswerButton
                            text="// Maracujá"
                            isSelected={selectedOption === '//'}
                            onSelect={() => !isAnswerShown && setSelectedOption('//')}  
                            disabled={isAnswerShown} 
                        />
                    </View>

                    <View style={{ height: 80, width: '48%', marginBottom: 20 }}>
                        <AnswerButton
                            text="/* Limão */"
                            isSelected={selectedOption === '/* */'}
                            onSelect={() => !isAnswerShown && setSelectedOption('/* */')}  
                            disabled={isAnswerShown}  
                        />
                    </View>

                    <View style={{ height: 80, width: '48%', marginBottom: 20 }}>
                        <AnswerButton
                            text="<!-- Maçã-->"
                            isSelected={selectedOption === '<!-- -->'}
                            onSelect={() => !isAnswerShown && setSelectedOption('<!-- -->')}  
                            disabled={isAnswerShown}  
                        />
                    </View>
                </View>
            </View>

            <View style={lessonStyles(colorScheme).bottombox}>
                <Spacer height={20} />
                {isAnswerShown ? (
                    <View>
                        <View style={lessonStyles(colorScheme).feedbackTitleRow}>
                            <Ionicons
                                name={isCorrect === true ? 'checkmark-circle' : isCorrect === false ? 'close-circle' : ''}
                                size={27}
                                color={getColor()} 
                            />
                            <Text style={[lessonStyles(colorScheme).feedbackTitle, { color: getColor() }]} >
                                {isCorrect === true
                                    ? 'Parabéns!'
                                    : isCorrect === false
                                    ? 'Não foi dessa vez'
                                    : ''}
                            </Text>
                        </View>

                        {isCorrect === false && (
                            <View>
                                <Spacer height={10}></Spacer>
                                <Text style={[lessonStyles(colorScheme).feedbackText, { color: getColor() }]} >
                                    Resposta Correta:
                                </Text>
                                <Spacer height={10}></Spacer>
                                <Text style={[lessonStyles(colorScheme).CorretAnswer, { color: getColor() }]} >
                                    {correctAnswerMessage}
                                </Text>
                            </View>
                        )}
                        <Spacer height={30}></Spacer>
                        {isCorrect ? (
                            <GreenButton title="EBAA!" onPress={onNext} isLoading={isLoading} />
                        ) : (
                            <RedButton title="AHH, QUASE!" onPress={onNext} isLoading={isLoading} />
                        )}
                    </View>
                ) : (
                    <BlueButton
                        title="RESPONDER"
                        onPress={handleAnswerButtonPress}
                        isLoading={isLoading}
                        disabled={!selectedOption}
                    />
                )}
            </View>
        </View>
    );
};

const Quest4 = ({ onNext }: { onNext: () => void }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
    const [isAnswerShown, setIsAnswerShown] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null); 
    const [correctAnswerMessage, setCorrectAnswerMessage] = useState<string | null>(null); 

    const handleAnswerButtonPress = () => {
        if (selectedOption === 'variable = 10') {
            setIsCorrect(true);
            setCorrectAnswerMessage(null);
        } else {
            setIsCorrect(false);
            setCorrectAnswerMessage('variable = 10'); 
        }
        setIsAnswerShown(true); 
    };

    const getColor = () => {
        if (isCorrect) {
            return colorScheme === 'dark' ? colors.green[400] : colors.green[400];
        } else {
            return colorScheme === 'dark' ? colors.red[400] : colors.red[450];
        }
    };

    return (
        <View style={[lessonStyles(colorScheme).beginScreenContainer]}>
            <View style={lessonStyles(colorScheme).topbox}>
                <Text style={typography(colorScheme).highLightText}>
                    Qual é a maneira correta de declarar uma variável?
                </Text>
            </View>

            <View style={lessonStyles(colorScheme).middlebox}>
                <View style={lessonStyles(colorScheme).optionsGrid}>
                    <View style={{ height: 80, width: '48%', marginBottom: 20 }}>
                        <AnswerButton
                            text="True = 10"
                            isSelected={selectedOption === 'True = 10'}
                            onSelect={() => !isAnswerShown && setSelectedOption('True = 10')}  
                            disabled={isAnswerShown}  
                        />
                    </View>

                    <View style={{ height: 80, width: '48%', marginBottom: 20 }}>
                        <AnswerButton
                            text="10 = apple"
                            isSelected={selectedOption === '10 = apple'}
                            onSelect={() => !isAnswerShown && setSelectedOption('10 = apple')}  
                            disabled={isAnswerShown} 
                        />
                    </View>

                    <View style={{ height: 80, width: '48%', marginBottom: 20 }}>
                        <AnswerButton
                            text="variable = 10"
                            isSelected={selectedOption === 'variable = 10'}
                            onSelect={() => !isAnswerShown && setSelectedOption('variable = 10')}  
                            disabled={isAnswerShown}  
                        />
                    </View>

                    <View style={{ height: 80, width: '48%', marginBottom: 20 }}>
                        <AnswerButton
                            text="orange : 10"
                            isSelected={selectedOption === 'orange : 10'}
                            onSelect={() => !isAnswerShown && setSelectedOption('orange : 10')}  
                            disabled={isAnswerShown}  
                        />
                    </View>
                </View>
            </View>

            <View style={lessonStyles(colorScheme).bottombox}>
                <Spacer height={20} />
                {isAnswerShown ? (
                    <View>
                        <View style={lessonStyles(colorScheme).feedbackTitleRow}>
                            <Ionicons
                                name={isCorrect === true ? 'checkmark-circle' : isCorrect === false ? 'close-circle' : ''}
                                size={27}
                                color={getColor()} 
                            />
                            <Text style={[lessonStyles(colorScheme).feedbackTitle, { color: getColor() }]} >
                                {isCorrect === true
                                    ? 'Parabéns!'
                                    : isCorrect === false
                                    ? 'Não foi dessa vez'
                                    : ''}
                            </Text>
                        </View>

                        {isCorrect === false && (
                            <View>
                                <Spacer height={10}></Spacer>
                                <Text style={[lessonStyles(colorScheme).feedbackText, { color: getColor() }]} >
                                    Resposta Correta:
                                </Text>
                                <Spacer height={10}></Spacer>
                                <Text style={[lessonStyles(colorScheme).CorretAnswer, { color: getColor() }]} >
                                    {correctAnswerMessage}
                                </Text>
                            </View>
                        )}
                        <Spacer height={30}></Spacer>
                        {isCorrect ? (
                            <GreenButton title="EBAA!" onPress={onNext} isLoading={isLoading} />
                        ) : (
                            <RedButton title="AHH, QUASE!" onPress={onNext} isLoading={isLoading} />
                        )}
                    </View>
                ) : (
                    <BlueButton
                        title="RESPONDER"
                        onPress={handleAnswerButtonPress}
                        isLoading={isLoading}
                        disabled={!selectedOption}
                    />
                )}
            </View>
        </View>
    );
};
  
  const Quest5 = ({ onNext }: { onNext: () => void }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
    const [isAnswerShown, setIsAnswerShown] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null); 
    const [correctAnswerMessage, setCorrectAnswerMessage] = useState<string | null>(null); 

    const handleAnswerButtonPress = () => {
        if (selectedOption === 'int') {
            setIsCorrect(true);
            setCorrectAnswerMessage(null);
        } else {
            setIsCorrect(false);
            setCorrectAnswerMessage('int'); 
        }
        setIsAnswerShown(true); 
    };

    const getColor = () => {
        if (isCorrect) {
            return colorScheme === 'dark' ? colors.green[400] : colors.green[400];
        } else {
            return colorScheme === 'dark' ? colors.red[400] : colors.red[450];
        }
    };

    return (
        <View style={[lessonStyles(colorScheme).beginScreenContainer]}>
            <View style={lessonStyles(colorScheme).topbox}>
                <Text style={typography(colorScheme).highLightText}>
                    Qual tipo de dado é utilizado para armazenar números inteiros em Python?
                </Text>
            </View>

            <View style={lessonStyles(colorScheme).middlebox}>
                <View style={lessonStyles(colorScheme).optionsGrid}>
                    <View style={{ height: 80, width: '48%', marginBottom: 20 }}>
                        <AnswerButton
                            text="float"
                            isSelected={selectedOption === 'float'}
                            onSelect={() => !isAnswerShown && setSelectedOption('float')}  
                            disabled={isAnswerShown}  
                        />
                    </View>

                    <View style={{ height: 80, width: '48%', marginBottom: 20 }}>
                        <AnswerButton
                            text="int"
                            isSelected={selectedOption === 'int'}
                            onSelect={() => !isAnswerShown && setSelectedOption('int')}  
                            disabled={isAnswerShown} 
                        />
                    </View>

                    <View style={{ height: 80, width: '48%', marginBottom: 20 }}>
                        <AnswerButton
                            text="complex"
                            isSelected={selectedOption === 'complex'}
                            onSelect={() => !isAnswerShown && setSelectedOption('complex')}  
                            disabled={isAnswerShown}  
                        />
                    </View>

                    <View style={{ height: 80, width: '48%', marginBottom: 20 }}>
                        <AnswerButton
                            text="bool"
                            isSelected={selectedOption === 'bool'}
                            onSelect={() => !isAnswerShown && setSelectedOption('bool')}  
                            disabled={isAnswerShown}  
                        />
                    </View>
                </View>
            </View>

            <View style={lessonStyles(colorScheme).bottombox}>
                <Spacer height={20} />
                {isAnswerShown ? (
                    <View>
                        <View style={lessonStyles(colorScheme).feedbackTitleRow}>
                            <Ionicons
                                name={isCorrect === true ? 'checkmark-circle' : isCorrect === false ? 'close-circle' : ''}
                                size={27}
                                color={getColor()} 
                            />
                            <Text style={[lessonStyles(colorScheme).feedbackTitle, { color: getColor() }]}>{isCorrect === true ? 'Parabéns!' : isCorrect === false ? 'Não foi dessa vez' : ''}</Text>
                        </View>

                        {isCorrect === false && (
                            <View>
                                <Spacer height={10}></Spacer>
                                <Text style={[lessonStyles(colorScheme).feedbackText, { color: getColor() }]}>
                                    Resposta Correta:
                                </Text>
                                <Spacer height={10}></Spacer>
                                <Text style={[lessonStyles(colorScheme).CorretAnswer, { color: getColor() }]}>
                                    {correctAnswerMessage}
                                </Text>
                            </View>
                        )}
                        <Spacer height={30}></Spacer>
                        {isCorrect ? (
                            <GreenButton title="EBAA!" onPress={onNext} isLoading={isLoading} />
                        ) : (
                            <RedButton title="AHH, QUASE!" onPress={onNext} isLoading={isLoading} />
                        )}
                    </View>
                ) : (
                    <BlueButton
                        title="RESPONDER"
                        onPress={handleAnswerButtonPress}
                        isLoading={isLoading}
                        disabled={!selectedOption}
                    />
                )}
            </View>
        </View>
    );
};

  
  
export default function StartLesson() {
  const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
  const [progress, setProgress] = useState(1/7); 
  const [currentPage, setCurrentPage] = useState(0); 
  const router = useRouter();

  const handleAccessGoNext = () => {
    if (currentPage < 4) {
      setProgress(progress + 1 / 5); 
      setCurrentPage(currentPage + 1); 
    }
    else {
      router.push('/lesson/result')
    }
  };
  
  const handleAcessGoBack = () => {
    if (progress === 0){
        router.push('/custom');
    }
    setProgress(progress - 1 / 5); 
    setCurrentPage(currentPage - 1); 
  };

  const renderPage = () => {
    switch (currentPage) {
        case 0:
            return <Quest1 onNext={handleAccessGoNext} />;
        case 1:
            return <Quest2 onNext={handleAccessGoNext} />;
        case 2:
            return <Quest3 onNext={handleAccessGoNext} />;
        case 3:
            return <Quest4 onNext={handleAccessGoNext} />;
        case 4:
            return <Quest5 onNext={handleAccessGoNext} />;
      default:
        return <Text>Página não encontrada</Text>;
    }
  };

  return (
      <SafeAreaView style={[lessonStyles(colorScheme).beginScreenContainer]}>
        <Spacer height={15} />
        <View style={lessonStyles(colorScheme).navigationHeader}>
          <TouchableOpacity onPress={handleAcessGoBack} style={{ marginRight: 10 }}>
            <MaterialIcons
              name="arrow-back-ios-new"
              color={colorScheme === 'dark' ? colors.gray[600] : colors.gray[800]}
              size={24}
            />
          </TouchableOpacity>
          <ProgressBar progress={progress} />
        </View>
        {renderPage()}
      </SafeAreaView>
  );
};
