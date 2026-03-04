# Изменения в ПР:

## Поправлены замечания по 1 занятию
- В useTasks поправлено дублирование useState (visibleTasks и filteredTasks)
- Убран пропс action из TaskCard (теперь компонент презентационный, логика перенесена в TaskList)
- Убран лишний пропс из FilterButton
- Добавлен router.tsx
- Кнопка удаления размещена в TaskList рядом с карточкой

## По 2 занятию:
- Добавлена мемоизация (React.memo, useMemo, useCallback)
- Добален анализ производительности через DevTools

<img width="555" height="426" alt="lesson2" src="https://github.com/user-attachments/assets/91b31dba-3dec-4d83-9412-9731a3af7eca" />
Перестал перерендериваться TaskCard
Общее время рендера сократилось с 5.2ms до 2.7ms





