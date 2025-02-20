import { useState } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { colors } from '@/styles/colors';
import { useRouter } from 'expo-router';
import { View, StyleSheet, ColorSchemeName, TouchableOpacity, Text, ScrollView, LayoutChangeEvent, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import ProgressBar from '@/components/ProgressBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Spacer } from '@/components/Spacer';
import { BlueButton } from '@/components/ui/BlueButton';
import { SelectableOption } from '@/components/ui/SelectableOption';
import beginStyles from '@/styles/beginStyles';
import typography from '@/styles/typography';

const HowDidYouHear = ({ onNext }: { onNext: () => void }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [contentHeight, setContentHeight] = useState(0);
    const [scrollViewHeight, setScrollViewHeight] = useState(0);
    const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
  
    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const contentOffsetY = event.nativeEvent.contentOffset.y;
      setScrollPosition(contentOffsetY);
    };
  
    const handleLayout = (event: LayoutChangeEvent) => {
      const layoutHeight = event.nativeEvent.layout.height;
      setScrollViewHeight(layoutHeight);
    };
  
    const handleContentSizeChange = (contentWidth: number, contentHeight: number) => {
      setContentHeight(contentHeight);
    };
  
    const isTop = scrollPosition === 0;
    const isBottom = scrollPosition + scrollViewHeight >= contentHeight - 10; 
  
    const containerStyle = [
      beginStyles(colorScheme).middlebox,
      !isTop && { borderTopWidth: 1, borderTopColor: colorScheme === 'dark' ? colors.gray[500] : colors.gray[400] },
      !isBottom && { borderBottomWidth: 1, borderBottomColor: colorScheme === 'dark' ? colors.gray[500] : colors.gray[400] }
    ];
  
    return (
      <View style={[beginStyles(colorScheme).beginScreenContainer]}>
  
        <View style={beginStyles(colorScheme).topbox}>
          <Text style={typography(colorScheme).highLightText}>
            Como você conheceu o Algocraft?
          </Text>
        </View>
        <View style={containerStyle}>
          <ScrollView 
            contentContainerStyle={beginStyles(colorScheme).selectableOptionList}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            onLayout={handleLayout} 
            onContentSizeChange={handleContentSizeChange} 
          >
            <SelectableOption
              text="Canal do WhatsApp"
              imageSource={require('@assets/images/flaticon/social.png')}
              isSelected={selectedOption === 'WhatsApp'}
              onSelect={() => setSelectedOption('WhatsApp')}
            />
            <SelectableOption
              text="Facebook"
              imageSource={require('@assets/images/flaticon/facebook.png')}
              isSelected={selectedOption === 'Facebook'}
              onSelect={() => setSelectedOption('Facebook')}
            />
            <SelectableOption
              text="Instagram"
              imageSource={require('@assets/images/flaticon/instagram.png')}
              isSelected={selectedOption === 'Instagram'}
              onSelect={() => setSelectedOption('Instagram')}
            />
            <SelectableOption
              text="Youtube"
              imageSource={require('@assets/images/flaticon/youtube.png')}
              isSelected={selectedOption === 'Youtube'}
              onSelect={() => setSelectedOption('Youtube')}
            />
            <SelectableOption
              text="Busca do Google"
              imageSource={require('@assets/images/flaticon/search.png')}
              isSelected={selectedOption === 'Google'}
              onSelect={() => setSelectedOption('Google')}
            />
            <SelectableOption
              text="Play Store"
              imageSource={require('@assets/images/flaticon/app.png')}
              isSelected={selectedOption === 'PlayStore'}
              onSelect={() => setSelectedOption('PlayStore')}
            />
            <SelectableOption
              text="Tik Tok"
              imageSource={require('@assets/images/flaticon/tik-tok.png')}
              isSelected={selectedOption === 'TikTok'}
              onSelect={() => setSelectedOption('TikTok')}
            />
            <SelectableOption
              text="Recomendação Pessoal"
              imageSource={require('@assets/images/flaticon/laugh.png')}
              isSelected={selectedOption === 'Recomendação'}
              onSelect={() => setSelectedOption('Recomendação')}
            />
            <SelectableOption
              text="Outros"
              imageSource={require('@assets/images/flaticon/apps.png')}
              isSelected={selectedOption === 'Outros'}
              onSelect={() => setSelectedOption('Outros')}
            />
            
          </ScrollView>
        </View>
  
        <View style={beginStyles(colorScheme).bottombox}>
        <Spacer height={20} />
          <BlueButton
            title="CONTINUAR"
            onPress={onNext}
            isLoading={isLoading}
            disabled={!selectedOption}
          />
        </View>
      </View>
    );
};


const Goals = ({ onNext }: { onNext: () => void }) => {
    const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  const router = useRouter();
  const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    setScrollPosition(contentOffsetY);
  };

  const handleLayout = (event: LayoutChangeEvent) => {
    const layoutHeight = event.nativeEvent.layout.height;
    setScrollViewHeight(layoutHeight);
  };

  const handleContentSizeChange = (contentWidth: number, contentHeight: number) => {
    setContentHeight(contentHeight);
  };

  const isTop = scrollPosition === 0;
  const isBottom = scrollPosition + scrollViewHeight >= contentHeight - 10; 

  const containerStyle = [
    beginStyles(colorScheme).middlebox,
    !isTop && { borderTopWidth: 1, borderTopColor: colorScheme === 'dark' ? colors.gray[500] : colors.gray[400] },
    !isBottom && { borderBottomWidth: 1, borderBottomColor: colorScheme === 'dark' ? colors.gray[500] : colors.gray[400] }
  ];

  return (
    <View style={[beginStyles(colorScheme).beginScreenContainer]}>
      <View style={beginStyles(colorScheme).topbox}>
        <Text style={typography(colorScheme).highLightText}>
          Qual é o seu objetivo ao aprender programação?
        </Text>
      </View>

      <View style={containerStyle}>
        <ScrollView 
          contentContainerStyle={beginStyles(colorScheme).selectableOptionList}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          onLayout={handleLayout} 
          onContentSizeChange={handleContentSizeChange} 
        >
          <SelectableOption
            text="Avançar na educação"
            imageSource={require('@assets/images/flaticon/books.png')}
            isSelected={selectedOption === 'Education'}
            onSelect={() => setSelectedOption('Education')}
          />
          <SelectableOption
            text="Construir um website"
            imageSource={require('@assets/images/flaticon/world-wide-web.png')}
            isSelected={selectedOption === 'Website'}
            onSelect={() => setSelectedOption('Website')}
          />
          <SelectableOption
            text="Progredir na carreira"
            imageSource={require('@assets/images/flaticon/succes.png')}
            isSelected={selectedOption === 'Career'}
            onSelect={() => setSelectedOption('Career')}
          />
          <SelectableOption
            text="Desenvolver aplicativos móveis"
            imageSource={require('@assets/images/flaticon/app-settings.png')}
            isSelected={selectedOption === 'MobileApp'}
            onSelect={() => setSelectedOption('MobileApp')}
          />
          <SelectableOption
            text="Iniciar um projeto pessoal"
            imageSource={require('@assets/images/flaticon/pencil.png')}
            isSelected={selectedOption === 'PersonalProject'}
            onSelect={() => setSelectedOption('PersonalProject')}
          />
          <SelectableOption
            text="Contribuir para projetos open source"
            imageSource={require('@assets/images/flaticon/open-source.png')}
            isSelected={selectedOption === 'OpenSource'}
            onSelect={() => setSelectedOption('OpenSource')}
          />
          <SelectableOption
            text="Mudar de carreira"
            imageSource={require('@assets/images/flaticon/exchange.png')}
            isSelected={selectedOption === 'CareerChange'}
            onSelect={() => setSelectedOption('CareerChange')}
          />
          <SelectableOption
            text="Outros objetivos"
            imageSource={require('@assets/images/flaticon/apps.png')}
            isSelected={selectedOption === 'Others'}
            onSelect={() => setSelectedOption('Others')}
          />
        </ScrollView>
      </View>

      <View style={beginStyles(colorScheme).bottombox}>
        <Spacer height={20} />
        <BlueButton
          title="CONTINUAR"
          onPress={onNext}
          isLoading={isLoading}
          disabled={!selectedOption}
        />
      </View>
    </View>
  );
};


const Experience = ({ onNext }: { onNext: () => void }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
  
    return (
      <View style={[beginStyles(colorScheme).beginScreenContainer]}>
        <View style={beginStyles(colorScheme).topbox}>
          <Text style={typography(colorScheme).highLightText}>
            Quanto você entende de programação?
          </Text>
        </View>
  
        <View style={beginStyles(colorScheme).middlebox}>
          <SelectableOption
              text="Sei um pouco de programação"
              imageSource={require('@assets/images/flaticon/bronze-medal.png')}
              isSelected={selectedOption === '1'}
              onSelect={() => setSelectedOption('1')}
            />
          <Spacer height={10}></Spacer>
          <SelectableOption
              text="Já desenvolvi pequenos projetos"
              imageSource={require('@assets/images/flaticon/silver-medal.png')}
              isSelected={selectedOption === '2'}
              onSelect={() => setSelectedOption('2')}
            />
            <Spacer height={10}></Spacer>
          <SelectableOption
              text="Tenho experiência prática com linguagens de programação "
              imageSource={require('@assets/images/flaticon/gold-medal.png')}
              isSelected={selectedOption === '3'}
              onSelect={() => setSelectedOption('3')}
            />
            <Spacer height={10}></Spacer>
          <SelectableOption
              text="Sou fluente em programação e já trabalhei em projetos complexos "
              imageSource={require('@assets/images/flaticon/cup.png')}
              isSelected={selectedOption === '4'}
              onSelect={() => setSelectedOption('4')}
            />
        </View>
  
        <View style={beginStyles(colorScheme).bottombox}>
        <Spacer height={20} />
          <BlueButton
            title="CONTINUAR"
            onPress={onNext}
            isLoading={isLoading}
            disabled={!selectedOption}
          />
        </View>
      </View>
    );
  }

  const Start = ({ onNext }: { onNext: () => void }) =>  {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
  
    return (
      <View style={[beginStyles(colorScheme).beginScreenContainer]}>
        <View style={beginStyles(colorScheme).topbox}>
          <Text style={typography(colorScheme).highLightText}>
            Vamos achar o melhor lugar para começar!
          </Text>
        </View>
  
        <View style={beginStyles(colorScheme).middlebox}>
          <SelectableOption
              text="É minha primeira vez programando!"
              imageSource={require('@assets/images/flaticon/start-line.png')}
              isSelected={selectedOption === 'Zero'}
              onSelect={() => setSelectedOption('Zero')}
              isLarge={true}
            />
          <Spacer height={20}></Spacer>
          <SelectableOption
              text="Conheço um pouco de programação!"
              imageSource={require('@assets/images/flaticon/rocket.png')}
              isSelected={selectedOption === '?'}
              onSelect={() => setSelectedOption('?')}
              isLarge={true}
            />
        </View>
  
        <View style={beginStyles(colorScheme).bottombox}>
        <Spacer height={20} />
          <BlueButton
            title="CONTINUAR"
            onPress={onNext}
            isLoading={isLoading}
            disabled={!selectedOption}
          />
        </View>
      </View>
    );
  }

  const Languages = ({ onNext }: { onNext: () => void }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [contentHeight, setContentHeight] = useState(0);
    const [scrollViewHeight, setScrollViewHeight] = useState(0);
    const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
  
    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const contentOffsetY = event.nativeEvent.contentOffset.y;
      setScrollPosition(contentOffsetY);
    };
  
    const handleLayout = (event: LayoutChangeEvent) => {
      const layoutHeight = event.nativeEvent.layout.height;
      setScrollViewHeight(layoutHeight);
    };
  
    const handleContentSizeChange = (contentWidth: number, contentHeight: number) => {
      setContentHeight(contentHeight);
    };
  
    const isTop = scrollPosition === 0;
    const isBottom = scrollPosition + scrollViewHeight >= contentHeight - 10; 
  
    const containerStyle = [
      beginStyles(colorScheme).middlebox,
      !isTop && { borderTopWidth: 1, borderTopColor: colorScheme === 'dark' ? colors.gray[500] : colors.gray[400] },
      !isBottom && { borderBottomWidth: 1, borderBottomColor: colorScheme === 'dark' ? colors.gray[500] : colors.gray[400] }
    ];
  
    return (
      <View style={[beginStyles(colorScheme).beginScreenContainer]}>
        <View style={beginStyles(colorScheme).topbox}>
          <Text style={typography(colorScheme).highLightText}>
            Qual linguagem você quer aprender?
          </Text>
        </View>
  
        <View style={containerStyle}>
          <ScrollView 
            contentContainerStyle={beginStyles(colorScheme).selectableOptionList}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            onLayout={handleLayout} 
            onContentSizeChange={handleContentSizeChange} 
          >
            <SelectableOption
              text="Python"
              imageSource={require('@assets/images/flaticon/python.png')}
              isSelected={selectedOption === 'Python'}
              onSelect={() => setSelectedOption('Python')}
            />
            <SelectableOption
              text="C"
              imageSource={require('@assets/images/flaticon/c.png')}
              isSelected={selectedOption === 'C'}
              onSelect={() => setSelectedOption('C')}
            />
            <SelectableOption
              text="C++"
              imageSource={require('@assets/images/flaticon/c-.png')}
              isSelected={selectedOption === 'C++'}
              onSelect={() => setSelectedOption('C++')}
            />
            <SelectableOption
              text="C#"
              imageSource={require('@assets/images/flaticon/c-sharp.png')}
              isSelected={selectedOption === 'C#'}
              onSelect={() => setSelectedOption('C#')}
            />
            <SelectableOption
              text="Java"
              imageSource={require('@assets/images/flaticon/java.png')}
              isSelected={selectedOption === 'Java'}
              onSelect={() => setSelectedOption('Java')}
            />
            <SelectableOption
              text="HTML"
              imageSource={require('@assets/images/flaticon/html-5.png')}
              isSelected={selectedOption === 'HTML'}
              onSelect={() => setSelectedOption('HTML')}
            />
            <SelectableOption
              text="CSS"
              imageSource={require('@assets/images/flaticon/css-3.png')}
              isSelected={selectedOption === 'CSS'}
              onSelect={() => setSelectedOption('CSS')}
            />
            <SelectableOption
              text="JavaScript"
              imageSource={require('@assets/images/flaticon/js.png')}
              isSelected={selectedOption === 'JavaScript'}
              onSelect={() => setSelectedOption('JavaScript')}
            />
            <SelectableOption
              text="React"
              imageSource={require('@assets/images/iconscout/react.png')}
              isSelected={selectedOption === 'React'}
              onSelect={() => setSelectedOption('React')}
            />
            <SelectableOption
              text="Flutter"
              imageSource={require('@assets/images/iconscout/flutter.png')}
              isSelected={selectedOption === 'Flutter'}
              onSelect={() => setSelectedOption('Flutter')}
            />
          </ScrollView>
        </View>
  
        <View style={beginStyles(colorScheme).bottombox}>
        <Spacer height={20} />
          <BlueButton
            title="CONTINUAR"
            onPress={onNext}
            isLoading={isLoading}
            disabled={!selectedOption}
          />
        </View>
      </View>
    );
  }
  
  const Schedule = ({ onNext }: { onNext: () => void }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
  
    return (
      <View style={[beginStyles(colorScheme).beginScreenContainer]}>
        <View style={beginStyles(colorScheme).topbox}>
          <Text style={typography(colorScheme).highLightText}>
              Qual vai ser o seu nível de desafio?
          </Text>
        </View>
  
        <View style={beginStyles(colorScheme).middlebox}>
          <SelectableOption
              text="5 minutos / dia"
              title="Fácil"
              isSelected={selectedOption === '5'}
              onSelect={() => setSelectedOption('5')}
            />
          <Spacer height={18}></Spacer>
          <SelectableOption
              text="10 minutos / dia"
              title="Normal"
              isSelected={selectedOption === '10'}
              onSelect={() => setSelectedOption('10')}
              showMessage="RECOMENDADO P/ INICIANTES"
            />
            <Spacer height={10}></Spacer>
          <SelectableOption
              text="15 minutos / dia"
              title="Difícil"
              isSelected={selectedOption === '15'}
              onSelect={() => setSelectedOption('15')}
            />
            <Spacer height={10}></Spacer>
          <SelectableOption
              text="30 minutos / dia"
              title="Punitivo"
              isSelected={selectedOption === '30'}
              onSelect={() => setSelectedOption('30')}
            />
        </View>
  
        <View style={beginStyles(colorScheme).bottombox}>
        <Spacer height={20} />
          <BlueButton
            title="CONTINUAR"
            onPress={onNext}
            isLoading={isLoading}
            disabled={!selectedOption}
          />
        </View>
      </View>
    );
  };
  
  
export default function Begin() {
  const colorScheme: ColorSchemeName = useColorScheme() ?? 'light';
  const [progress, setProgress] = useState(1/7); 
  const [currentPage, setCurrentPage] = useState(0); 
  const router = useRouter();

  const handleAccessGoNext = () => {
    if (currentPage < 5) {
      setProgress(progress + 1 / 6); 
      setCurrentPage(currentPage + 1); 
    }
    else {
      router.push('/begin/startScreen');
    }
  };
  
  const handleAcessGoBack = () => {
    if (progress === 0){
        router.push('/custom');
    }
    setProgress(progress - 1 / 7); 
    setCurrentPage(currentPage - 1); 
  };

  const renderPage = () => {
    switch (currentPage) {
        case 0:
            return <Start onNext={handleAccessGoNext} />;
        case 1:
            return <Goals onNext={handleAccessGoNext} />;
        case 2:
            return <HowDidYouHear onNext={handleAccessGoNext} />;
        case 3:
            return <Languages onNext={handleAccessGoNext} />;
        case 4:
            return <Experience onNext={handleAccessGoNext} />;
        case 5:
            return <Schedule onNext={handleAccessGoNext} />
      default:
        return <Text>Página não encontrada</Text>;
    }
  };

  return (
      <SafeAreaView style={[beginStyles(colorScheme).beginScreenContainer]}>
        <Spacer height={15} />
        <View style={beginStyles(colorScheme).navigationHeader}>
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
