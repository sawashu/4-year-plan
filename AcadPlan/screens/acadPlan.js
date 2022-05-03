import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DraxProvider, DraxView, DraxList } from 'react-native-drax';

import { TouchableOpacity } from 'react-native';
import {
  MenuContext,
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { Ionicons } from '@expo/vector-icons';

const gestureRootViewStyle = { flex: 1 };

export default function AcadPlan() {
  const draggableItemList = [
    {
      "id": 1,
      "name": "CMSC 181",
      "credits": "          CR:3",
      "background_color": "#00FFFF",
      "title": "Introduction to Computer Science I",
      "desc": "I forgot what we did in this class. Did a little pig latin\nPrerequisites: None\nProfessor: Dr. Shepherd"
    },
    {
      "id": 2,
      "name": "CMSC 245",
      "credits":"           CR:3",
      "background_color": "#00FFFF",
      "title": "Algorhythms",
      "desc": "Okay, here we go. Focus. Speed. I am Speed One Winner. 42 Losers. I eat losers for breakfast\nPrerequisites: CMSC 182\nProfessor: Dr. Mcqueen"
    },
    {
      "id": 9,
      "name": "CMSC 290",
      "credits":"           CR:1",
      "background_color": "#00FFFF",
      "title": "Computer Science Project",
      "desc": "Create an project whatever you like. Then present in final.\nPrerequisites: CMSC 181\nProfessor: Dr. Backman"
    },
    {
      "id": 10,
      "name": "CMSC 351",
      "credits":"           CR:3",
      "background_color": "#00FFFF",
      "title": "User Interface Design & Development",
      "desc": "Students will learn to build user interfaces that meet the needs of a user population by exploring topics from user interface design and human-computer interaction theory.\nPrerequisites: CMSC 181\nProfessor: Dr. Shepherd"
    },
    {
      "id": 3,
      "name": "CMSC 389",
      "credits": "           CR:3",
      "background_color": "#00FFFF",
      "title": "Software Engineering",
      "desc": "Group Project Simulator. It is a roulet whether or not you enjoy this class.\nPrerequisites: CMSC 182\nProfessor: Old Mcdonald"
    },
    {
      "id": 4,
      "name": "HIST 280",
      "credits": "           CR:3",
      "background_color": "yellow",
      "title": "History of American Education",
      "desc": "There are only two things you need to know about the cevil war.\nPrerequisites: None\nProfessor: Dr. Lincon"
    },
    {
      "id": 5,
      "name": "CRIM 102",
      "credits": "           CR:3",
      "background_color": 'orange',
      "title": "Introduction to Criminology",
      "desc": "Learn basic principles of criminology.\nPrerequisites: None\nProfessor: Dr. Riner"
    },
    {
      "id": 6,
      "name": "COMM 280",
      "credits": "           CR:3",
      "background_color": 'red',
      "title": "Team Communication",
      "desc": "Team based communication is essential part in our life. By making groups or teams in both class time and outside of class, you will deal with learn teamwork and roles in a team.\nPrerequisites: COMM 100\nProfessor: Dr. Community"
    },
    {
      "id": 7,
      "name": "ENGL 100",
      "credits": "           CR:4",
      "background_color": 'lightblue',
      "title": "Academic Writing I",
      "desc": "Academic writing is the most significant part, and its skill affects everything in college degree. You will be skilled in politely and academically writing through critical thinking.\nPrerequisites: CS 181\nProfessor: Dr. Formichella"

    },
    {
      "id": 8,
      "name": "MATH 210",
      "credits": "           CR:4",
      "background_color": 'lime',
      "title": "Calculus I",
      "desc": "College Math. Contents included: Differentiation, Integration, and Application of Both\nPrerequisites: Pass Placement Test\nProfessor: Dr. Hartsock"
    },  
  ];
  const FirstReceivingItemList = [/*
    {
      "id": 13,
      "name": "M",
      "credits": "           CR:3",
      "background_color": '#ffaaff',
      "title": "None",
      "desc": "Description: Okay, here we go. Focus. Speed. I am Speed One Winner. 42 Losers. I eat losers for breakfast\nPrerequisites: CS 181\nProfessor: Dr. Mcqueen"
    },
    {
      "id": 14,
      "name": "N",
      "credits": "           CR:3",
      "background_color": '#ffaaff',
      "title": "None",
      "desc": "Description: Okay, here we go. Focus. Speed. I am Speed One Winner. 42 Losers. I eat losers for breakfast\nPrerequisites: CS 181\nProfessor: Dr. Mcqueen"
    },
    {
      "id": 15,
      "name": "O",
      "credits": "           CR:3",
      "background_color": '#ffaaff',
      "title": "None",
      "desc": "Description: Okay, here we go. Focus. Speed. I am Speed One Winner. 42 Losers. I eat losers for breakfast\nPrerequisites: CS 181\nProfessor: Dr. Mcqueen"

    },
    {
      "id": 16,
      "name": "P",
      "credits": "           CR:3",
      "background_color": '#ffaaff',
      "title": "None",
      "desc": "Description: Okay, here we go. Focus. Speed. I am Speed One Winner. 42 Losers. I eat losers for breakfast\nPrerequisites: CS 181\nProfessor: Dr. Mcqueen"
    },
    {},*/
  ];

  const FirstListsList = [
      {
          "year": 2022,
          "semesters": [
            {
                "semester": "Fall",
                "courselist": [{},{},{},{},{},{},{},{}] //[{},{},{},{},{}]
            },
            {
                "semester": "Spring",
                "courselist": [{},{},{},{},{},{},{},{}]
            }
          ]
      },
      {
          "year": 2023,
          "semesters": [
            {
                "semester": "Fall",
                "courselist": [{},{},{},{},{},{},{},{}]
            },
            {
                "semester": "Spring",
                "courselist": [{},{},{},{},{},{},{},{}]
            }
          ]
      },
      {
          "year": 2024,
          "semesters": [
            {
                "semester": "Fall",
                "courselist": [{},{},{},{},{},{},{},{}]
            },
            {
                "semester": "Spring",
                "courselist": [{},{},{},{},{},{},{},{}]
            }
          ]
      },
      {
          "year": 2025,
          "semesters": [
            {
                "semester": "Fall",
                "courselist": [{},{},{},{},{},{},{},{}]
            },
            {
                "semester": "Spring",
                "courselist": [{},{},{},{},{},{},{},{}]
            }
          ]
      },
  ];
      
/*
  const fallReceivingItemList = [];
  for (let i=0;i<4;i++){
    fallReceivingItemList[
  }
  const [receivingItemList, setReceivedItemList] = React.useState(FirstReceivingItemList);
  const [receivingItemList2, setReceivedItemList1] = React.useState(defaultReceivingItemList1);
  */
  const [dragItemMiddleList, setDragItemListMiddle] = React.useState(draggableItemList);

  const [receiveItemList, setReceiveItemList] = React.useState(FirstListsList);

  const DragUIComponent = ({ item, index }) => {
    return (
      <DraxView
        style={[styles.centeredContent, styles.draggableBox, { backgroundColor: item.background_color }]}
        draggingStyle={styles.dragging}
        dragReleasedStyle={styles.dragging}
        hoverDraggingStyle={styles.hoverDragging}
        dragPayload={index}
        longPressDelay={150}
        key={index}
      >
        <Menu>
          <MenuTrigger style={styles.textStyle} text={item.name+item.credits} />
          <MenuOptions style={{backgroundColor: 'lightgray'}}>
            <MenuOption disabled={true}>
              <Text style={{ color: 'black', fontWeight: 'bold' }}>{item.title}</Text>
            </MenuOption>
            <MenuOption disabled={true}>
              <Text style={{ color: 'black' }}>{item.desc}</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </DraxView>
    );
  }

  const putItemDragList = (index, yearIndex, semIndex) => {
    let newReceivingItemList = [...receiveItemList];
    let empty = {};
    let temp = newReceivingItemList[index.yearIndex]["semesters"][index.semIndex]["courselist"][index.index];
    newReceivingItemList[index.yearIndex]["semesters"][index.semIndex]["courselist"][index.index] = empty; 
    setReceiveItemList(newReceivingItemList);

    let newDragItemMiddleList = [...dragItemMiddleList, temp];
    setDragItemListMiddle(newDragItemMiddleList);
  }

  const ReceivingZoneUIComponent = ({ item, index, yearIndex, semIndex }) => {
    return (
      <DraxView
        style={[styles.centeredContent, styles.receivingZone, { backgroundColor: item.background_color }]}
        receivingStyle={styles.receiving}
        
        renderContent={({ viewState }) => {
          const receivingDrag = viewState && viewState.receivingDrag;
          const payload = receivingDrag && receivingDrag.payload;
          return (
            <View>
            <Menu>
              <MenuTrigger style={styles.textStyle} text={item.name+item.credits} />
              <MenuOptions style={{backgroundColor: 'lightgray'}}>
                 <MenuOption style={{ backgroundColor: 'white', margin:5 }} onSelect={() => {putItemDragList({index, yearIndex, semIndex})}}>
                 <Text style={{ color: 'red', fontWeight: 'bold' }}>❌    {item.name}</Text>
                 </MenuOption>
                 <MenuOption disabled={true}>
                 <Text style={{ color: 'black', fontWeight: 'bold'}}>{item.title}</Text>
                 </MenuOption>
                 <MenuOption disabled={true}>
                 <Text style={{ color: 'black'}}>{item.desc}</Text>
                 </MenuOption>
              </MenuOptions>
            </Menu>
            </View>
          );
        }}
        key={index}
        onReceiveDragDrop={(event) => {
          let selected_item = dragItemMiddleList[event.dragged.payload];
          console.log('onReceiveDragDrop::index', selected_item, index);
          console.log('onReceiveDragDrop :: payload', event.dragged.payload);
          let newReceivingItemList = [...receiveItemList];
          let popped_item = newReceivingItemList[yearIndex]["semesters"][semIndex]["courselist"][index]; 
          console.log('onReceiveDragDrop :: newReceivingItemList', newReceivingItemList);
          console.log('on receive: ', newReceivingItemList[yearIndex]["semesters"][semIndex]);
          newReceivingItemList[yearIndex]["semesters"][semIndex]["courselist"][index] = selected_item;
          setReceiveItemList(newReceivingItemList);

          let newDragItemMiddleList = [...dragItemMiddleList];
          console.log("RRR", popped_item['id']);
          if(popped_item['id'] == undefined){
            console.log("enter ere?")
            for (let i=event.dragged.payload; i<newDragItemMiddleList.length-1; i++){
              newDragItemMiddleList[i] = newDragItemMiddleList[i+1];
            }
            newDragItemMiddleList.pop();
          } else{
            newDragItemMiddleList[event.dragged.payload] = popped_item;
            console.log('onReceiveDragDrop :: newDragItemMiddleList 2', newDragItemMiddleList);
          }
          setDragItemListMiddle(newDragItemMiddleList);
        }}
      />
    );
  }

  const DivideBySemester = ({ item, index, yearIndex }) => {
    const semIndex = index;
    const this_year = receiveItemList[yearIndex]['year'];
    const this_semester = receiveItemList[yearIndex]['semesters'][index]['semester'];
    const this_term = this_year + ' ' + this_semester;
    return (
      <View key={index}>
        <Text style={styles.term}>{this_term}</Text>
        <View style={styles.receivingContainer}>
            {item.courselist.map((item,index) => ReceivingZoneUIComponent({ item, index, yearIndex, semIndex }))}
        </View>
      </View>
    );
  }

  const DivideByYear = ({ item, index }) => {
    const yearIndex = index;
    return (
      <View key={index} style={styles.singleYear}>
        {item.semesters.map((item, index) => DivideBySemester({ item, index, yearIndex }))}
      </View>
    );
  }

  const FlatListItemSeparator = () => {
    return (<View style={styles.itemSeparator} />);
  }


  return (
    <GestureHandlerRootView
      style={gestureRootViewStyle}>
      <MenuProvider>
      <DraxProvider>
        <View style={styles.container}>
          <MenuContext style={styles.leftSide}>
            <View style={styles.years}>
              {receiveItemList.map((item, index) => DivideByYear({ item, index }))} 
            </View>
          </MenuContext>
          <View style={styles.courseList}>
          <Text style={styles.term}>Required Course List</Text>
          <MenuContext style={styles.rightSide}>
            <View style={styles.draxListContainer}>
              <DraxList
                data={dragItemMiddleList}
                renderItemContent={DragUIComponent}
                keyExtractor={(item, index) => index.toString()}
                numColumns={1}
                ItemSeparatorComponent={FlatListItemSeparator}
                scrollEnabled={true}
              />
            </View>
          </MenuContext>
          </View>
        </View>
      </DraxProvider>
      </MenuProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    paddingRight: 40,
    paddingLeft: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    /*borderWidth: 5,
    borderColor: 'green',*/
  },
  years:{
    width: (Dimensions.get('window').width *4/5),
    padding: 6,
    /*borderWidth: 3, 
    borderColor: 'blue',*/
    flexDirection: 'row',
  },
  singleYear: {
    padding: 2, 
    paddingRight: 8,
    paddingLeft: 8,
  },
  term: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 2,
    alignSelf: 'center',
  },
  singleSemester: {
    padding: 6,
  },
  leftSide: {
    alignSelf: 'flex-start',
    /*borderWidth: 5,*/
    width: 'auto',
  },
  courseList: {
    paddingTop: 8,
    paddingBottom: 30,
  },
  rightSide: {
    flex: 1,
    alignSelf: 'flex-end',
    borderWidth: 2,
    /*borderColor: 'pink',*/
    width: (Dimensions.get('window').width /6)+15,
  },
  centeredContent: {
    borderRadius: 2,
  },
  receivingZone: {
    width: (Dimensions.get('window').width / 6),
    height: (Dimensions.get('window').height / 22),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:1,
    marginRight: 1,
    marginLeft: 1,
    borderWidth: 1,
    borderColor:'black'
  },
  receiving: {
    borderColor: 'red',
    borderWidth: 3,
  },
  draggableBox: {
    width: (Dimensions.get('window').width / 6),
    height: (Dimensions.get('window').height / 22),
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
  dragging: {
    opacity: 0.2,
  },
  hoverDragging: {
    borderColor: 'magenta',
    borderWidth: 2,
  },
  receivingContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderWidth: 3,
    borderColor: 'black',
    width: (Dimensions.get('window').width / 6)+8,
    height:(Dimensions.get('window').height /22)*8+15,
    marginBottom: 20,
  },
  itemSeparator: {
    height: 15
  },
  draxListContainer: {
    flex: 1,
    padding: 5,
    height: 'auto',
    width: (Dimensions.get('window').width *1/5),
  },
  receivingZoneContainer: {
    padding: 5,
    borderWidth: 5,
    borderColor: "yellow",
    height: 100,
  },
  textStyle: {
    fontSize: 18
  },
  headerStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20
  }
});

