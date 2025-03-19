import { CategoriesApi } from "@/components/api/categories.api";
import AppCheckBox from "@/components/modules/partials/checkBox/CheckBox";
import AppMenu from "@/components/modules/partials/dropdown/Dropdown";
import { ICategoryGet } from "@/interfaces/DTOs/categories";
import { Button } from "@material-tailwind/react";
import { FC, useEffect, useState } from "react";

interface IModelCategoriesProps {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
}

const ModelCategories: FC<IModelCategoriesProps> = ({
  selectedCategories,
  setSelectedCategories,
}) => {
  const [categories, setCategories] = useState<ICategoryGet[]>([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await CategoriesApi.getCategories();
      setCategories(res.data);
    };
    getCats();
  }, []);

  const handleCategoryChange = (categoryId: string, isChecked: boolean) => {
    if (isChecked) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((id) => id !== categoryId)
      );
    }
  };

  useEffect(() => {
    console.log(selectedCategories);
  }, [selectedCategories]);

  return (
    <AppMenu
      data={categories}
      renderItem={(item) => (
        <AppCheckBox
          label={item.name}
          checked={selectedCategories.includes(item._id.toString())}
          onChange={(e) =>
            handleCategoryChange(item._id.toString(), e.target.checked)
          }
        />
      )}
      getKey={(item) => item._id}
      // getSubs={(item) => item.subs ?? []}
    >
      <Button>Select categories</Button>
    </AppMenu>
  );
};

export default ModelCategories;
