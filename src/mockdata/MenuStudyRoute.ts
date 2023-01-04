// Japanese
const n5 = ["N5: Nấu cơm", "N5: Quét nhà", "N5: Thể dục", "N5: Đánh răng", "N5: Thể dục"];
const n4 = ["N4: Nấu cơm", "N4: Quét nhà", "N4: Thể dục", "N4: Đánh răng", "N4: Thể dục"];
const n3 = ["N3: Nấu cơm", "N3: Quét nhà", "N3: Thể dục", "N3: Đánh răng", "N3: Thể dục"];
const n2 = ["N2: Nấu cơm", "N2: Quét nhà", "N2: Thể dục", "N2: Đánh răng", "N2: Thể dục"];

const Japanese = ["N5: Tiếng Nhật hằng ngày", "N4: Tiếng Nhật trong cuộc sống", "N3: Quản trị cảm xúc", "N2: Tiếng Nhật Business"];

let MenuJapanese: any[] = [];

Japanese.map((value: string, index: number, array: string[]) => {
  MenuJapanese.push({
    key: `JP-${index}`,
    label: value,
    children: n5.map((val1: string, index1: number) => ({key: `${index}-${index1}`, label: val1}))
  });
  
})

// Soft Skill
const SoftSkill = ["Giao tiếp hằng ngày", "Giao tiếp trong cuộc sống", "Kỹ năng lãnh đạo", "Kỹ năng start-up"];

let MenuSoftSkill: any[] = [];

SoftSkill.map((value: string, index: number, array: string[]) => {
  MenuSoftSkill.push({
    key: `SS-${index}`,
    label: value,
  });
  
})

export {MenuJapanese, MenuSoftSkill};