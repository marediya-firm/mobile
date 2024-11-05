// const weekDayComponent = (date: string, day: number) => {
//   const momentDate = moment(date).add(day, 'day');
//   const dateFormat =
//     momentDate?.date() < 10 ? `0${momentDate?.date()}` : momentDate?.date();

//   return (
//     <DisplayDate
//       key={dateFormat?.toString()}
//       dateFormat={dateFormat}
//       day={day - 1}
//     />
//   );
// };

// const renderPart = useMemo(() => {
//   const week = [];
//   if (date?.day() - 1 !== 5 && date?.day() - 1 !== 0) {
//     week.push(weekDayComponent(item.punchSessions?.[0]?.punchIn, 0));
//   } else if (date?.day() - 1 == 0) {
//     week.push(weekDayComponent(item.punchSessions?.[0]?.punchIn, 1));
//   }
//   return week;
// }, [date]);

// export const DisplayDate = ({
//   dateFormat,
//   day,
// }: {
//   dateFormat: string | number;
//   day: number;
// }) => {
//   return (
//     <View style={[styles.recordWrapper]}>
//       <View style={[styles.recordContainer]}>
//         <View
//           style={[styles.dateContainer, { backgroundColor: Colors.color23 }]}
//         >
//           <Text style={[fontStyleVariant[variant.F50019], styles.recordColor]}>
//             {dateFormat}
//           </Text>
//           <Text
//             style={[
//               fontStyleVariant[variant.F30011],
//               styles.recordColor,
//               styles[500],
//             ]}
//           >
//             {weekend[day]}
//           </Text>
//         </View>
//         <Text
//           style={[
//             fontStyleVariant[variant.F60014],
//             styles.recordColor,
//             styles[500],
//             {
//               color: Colors.color23,
//               textAlign: 'center',
//               flex: 1,
//               textAlignVertical: 'center',
//             },
//           ]}
//         >
//           {'Week Of'}
//         </Text>
//       </View>
//     </View>
//   );
// };
